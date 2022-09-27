
  <script>
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";
    // import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
    // import { db } from "../../firebase";
    import { goto } from '$app/navigation';
    import { Client } from "@hubspot/api-client";
    import { enhance } from '$app/forms';

    import RegisterForm from "./RegisterForm.svelte";

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
          <RegisterForm formId="4264e834-dd9c-4e4e-bbe7-3979b8d32a9f"/>
      </div>
  </div>
</div>
