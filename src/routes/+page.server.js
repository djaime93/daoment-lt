import { HUBSPOT_API_KEY } from '$env/static/private';
import { goto } from '$app/navigation';
import { Client } from "@hubspot/api-client";
import { invalid, redirect } from '@sveltejs/kit';

const hubspotClient = new Client({ accessToken: HUBSPOT_API_KEY });

// const hubspotClient = new Client({ accessToken: HUBSPOT_API_KEY,
//   defaultHeaders: {'Content-Type': 'application/json'}});

// console.log(HUBSPOT_API_KEY)





/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({cookies, request}) => {
    // TODO log the user in
    console.log("test_index")
    

    const data = await request.formData();
    const email = data.get('email')
    // const first = data.get('first')
    // const last = data.get('last')
    console.log(email)

    const pushContact = async (values) => {
      const contactObj = {
        properties: {
            // firstname: values.first,
            // lastname: values.last,
            // email: values.email
            email: email
        },
      }

      console.log(hubspotClient)

      const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
      console.log(createContactResponse)
    }
    
    // const data = await request.formData();
    // pushContact(data)
    // redirect(303, '/faq')

  }
};