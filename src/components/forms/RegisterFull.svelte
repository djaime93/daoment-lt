<script>
  // import { createForm } from "svelte-forms-lib";
  // import * as yup from "yup";
  // import { goto } from '$app/navigation';
	// import { enhance } from "$app/forms";

  import RegisterForm from "./RegisterForm.svelte"
  const style = {
    form: `flex flex-col py-6 gap-6`,
    label: ``,
    input: `rounded-xl border-b focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2 text-daoblue`,
    button: `bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center`,
  }
</script>

<div>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<!-- <script>
  hbspt.forms.create({
    region: "na1",
    portalId: "22731278",
    formId: "c711fc88-44a1-4fb7-89a3-c6860eb121de",
    version: "V2_PRERELEASE"
  });
</script> -->

</div>

<svelte:window on:load="{
    hbspt.forms.create({
    region: "na1",
    portalId: "22731278",
    formId: "c711fc88-44a1-4fb7-89a3-c6860eb121de",
    version: "V2_PRERELEASE"
  })
}"/>

<RegisterForm formId="c711fc88-44a1-4fb7-89a3-c6860eb121de" />