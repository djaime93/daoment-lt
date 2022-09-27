<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { goto } from '$app/navigation';
	import { enhance } from "$app/forms";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      first: "",
      last: "",
      email: "",
    },
    validationSchema: yup.object().shape({
      first: yup.string().required(),
      last: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
    }),
    onSubmit: values => {
      // pushLead(values)
        goto('/faqs')
    }
  });

  const style = {
    form: `flex flex-col py-6 gap-6`,
    label: ``,
    input: `rounded-xl border-b focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2 text-daoblue`,
    button: `bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center`,
  }
</script>

<!-- <form action="?/contactWithName" class={style.form} on:submit={handleSubmit} use:enhance> -->
<form class={style.form} on:submit={handleSubmit} use:enhance action="?/contactWithName" >
  
  <label for="first">Name</label>
  <input
    id="first"
    name="first"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.first}
  />
  {#if $errors.first}
    <small>{$errors.first}</small>
  {/if}

  <label for="last">Last</label>
  <input
    id="last"
    name="last"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.last}
  />
  {#if $errors.last}
    <small>{$errors.last}</small>
  {/if}
  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.email}
  />
  {#if $errors.email}
    <small>{$errors.email}</small>
  {/if}

  <button class={style.button} type="submit">submit</button>
</form>