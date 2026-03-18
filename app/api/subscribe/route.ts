import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Get your Mailchimp credentials
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Missing Mailchimp credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare data for Mailchimp with merge fields
    const data = {
      email_address: email,
      status: 'subscribed', // or 'pending' for double opt-in
      merge_fields: {
        FNAME: firstName || '',
        LNAME: lastName || '',
        // You can add more fields here if needed
        // ADDRESS: address || '',
        // PHONE: phone || ''
      },
      tags: ['Website Signup'],
      // You can also add location/address if you collect it
      // location: {
      //   latitude: 0,
      //   longitude: 0
      // }
    };

    // Call Mailchimp API
    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    // Handle response
    if (response.status === 200 || response.status === 201) {
      return NextResponse.json(
        { 
          message: 'Successfully subscribed to newsletter!',
          subscriber: {
            email: responseData.email_address,
            firstName: responseData.merge_fields?.FNAME,
            lastName: responseData.merge_fields?.LNAME
          }
        },
        { status: 200 }
      );
    }

    // Handle specific errors
    if (response.status === 400) {
      if (responseData.title === 'Member Exists') {
        // If member exists, you can optionally update their info
        // This requires a PUT request to update existing member
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter' },
          { status: 400 }
        );
      }
      
      if (responseData.title === 'Invalid Resource') {
        return NextResponse.json(
          { error: 'Please provide valid information' },
          { status: 400 }
        );
      }
    }

    console.error('Mailchimp API error:', responseData);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}