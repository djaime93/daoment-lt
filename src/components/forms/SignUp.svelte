<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { collection, setDoc, doc, serverTimestamp } from "firebase/firestore";
  import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
  import { auth, db } from "../../firebase";
  import { goto } from '$app/navigation';

  const pushLead = async (user, values) => {
      try {
        const docRef = await setDoc(doc(db,'users',user.uid), {
          first: values.first,
          last: values.last,
          email: values.email,
          created: serverTimestamp(),
          updated: serverTimestamp(),
          converted: false,
          from: "signup"
          // uid: user.uid
        })
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  const sendVerificationEmail = async (user) => {
    sendEmailVerification(user)
    console.log("email sent to ", user.email)
  }

  const createAccount = async (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user)
        console.log(user.uid)

        sendVerificationEmail(user)
        pushLead(user, values)
        // window.history.back()
        goto("/thankyou")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
  }

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      first: "",
      last: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    validationSchema: yup.object().shape({
      first: yup.string().required(),
      last: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required().min(6),
      passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: values => {
      // pushLead(values)
      createAccount(values)
      return true
    }
  });

  const style = {
    form: `flex flex-col py-6 gap-6`,
    label: ``,
    input: `rounded-xl border-b focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2 text-daoblue`,
    button: `bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center`,
  }
</script>

<form action="https://google.com" class={style.form} on:submit={handleSubmit}>
  
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

  <label for="password">Password</label>
  <input
    type="password"
    id="password"
    name="password"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.password}
  />
  {#if $errors.password}
    <small>{$errors.password}</small>
  {/if}

  <label for="passwordConfirmation">Password Confirmation</label>
  <input
    type="password"
    id="passwordConfirmation"
    name="passwordConfirmation"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.passwordConfirmation}
  />
  {#if $errors.passwordConfirmation}
    <small>{$errors.passwordConfirmation}</small>
  {/if}

  <button class={style.button} type="submit">submit</button>
</form>