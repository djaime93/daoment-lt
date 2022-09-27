
  <script>
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";
    // import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
    // import { db } from "../../firebase";
    import { goto } from '$app/navigation';
    import { Client } from "@hubspot/api-client";
    import { enhance } from '$app/forms';

    // const secret = import.meta.env.VITE_HUBSPOT_API_KEY
  //   const hubspotClient = new Client({ accessToken: secret,
  //                                       defaultHeaders: {'Content-Type': 'application/json'}});

  // const pushLead = async (values) => {
  //     try {
  //       const docRef = await addDoc(collection(db,'leads'), {
  //         first: "",
  //         last: "",
  //         email: values.email,
  //         created: serverTimestamp(),
  //         updated: serverTimestamp(),
  //         converted: false,
  //         from: "register"
  //       })
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  // }

  // const pushContact = async (values) => {
  //   const contactObj = {
  //     properties: {
  //         // firstname: values.first,
  //         // lastname: values.last,
  //         email: values.email
  //     },
  //   }
    
  //   console.log(hubspotClient)

  //   const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
  //   console.log(createContactResponse)
  // }

    const { form, errors, state, handleChange, handleSubmit } = createForm({
      initialValues: {
        email: ""
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .email()
          .required()
      }),
      onSubmit: values => {
        goto('/faqs')
      }
    });
  </script>


<div class="w-full h-full">
  <!-- <div class="w-full relative overflow-hidden h-[80vh] sm:max-h-[50rem] bg-cover bg-center">
      <div class="w-full h-full top-0 left-0 absolute opacity-80 bg-gradient-to-br from-[#D1EFCB] via-[#071F25] to-[#071E26]"></div>
      <div class="w-full h-full flex absolute top-0 left-0 justify-center items-start px-4 flex-col"></div>

      <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2014/08/02/11/40/high-bay-408222_1280.jpg" alt="">
  </div> -->

  <div class="flex relative w-full border-t bg-daogreen py-20">
      <dir class="absolute -bottom-8 right-8">
          <img class="h-36 hidden sm:block" src="images/blocks/Blanco (1).png" alt="">
      </dir>
      <div class="flex flex-col justify-center items-center w-full">
          <div>
            
          </div>
          <div class="text-4xl font-semibold text-daoblue font-reno text-center">Get notifications about our first tokenized property</div>
              
              <!-- <form class="w-full flex flex-col sm:flex-row pt-20 justify-center items-center gap-6" on:submit={handleSubmit}> -->
              <form class="w-full flex flex-col sm:flex-row pt-20 justify-center items-center gap-6" 
                    method='POST'
                    on:submit={handleSubmit}
                    use:enhance
                    action="/"
                    >

                <!-- <label class="text-white" for="email">email</label> -->
                <div class="flex flex-col items-center">
                  <input
                  class="rounded-xl focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2 text-daoblue"
                  id="email"
                  name="email"
                  placeholder="email"
                  on:change={handleChange}
                  on:blur={handleChange}
                  bind:value={$form.email}
                />
                {#if $errors.email}
                <div class="w-full">
                  <small class="text-red-400 absolute">*{$errors.email}</small> 
                </div>
                {/if}
                </div>

            
                <button class="border bg-daoblue text-white hover:text-daoblue hover:bg-white rounded-xl px-4 py-2" type="submit">submit</button>
              </form>
      </div>
  </div>
</div>
