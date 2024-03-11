import { useFormState } from 'react-dom';
import { auth, signIn, signOut } from '@/auth';

// https://www.youtube.com/watch?v=uAh6ZOytUDk

function SignIn() {
  // const [state, formAction] = useFormState();
  return (
    <form action={async (data: FormData) => {
      "use server";
      console.log(data)
      await signIn("email", { email: data.get("email"), redirect: false })
    }}>
      <p>you are not logged in</p>
      <input type="email" name='email' id='email'/>
      <button type="submit">Sign In</button>
    </form>
  );
}


function SignOut({children}: {children: React.ReactNode}) {
  return (
    <form action={async (data: FormData) => {
      "use server";
      await signOut();
    }}>
      <p>{children}</p>
      <input type="email" />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default async function signin() {
  const session = await auth();
  console.log(session);
  const user = session?.user.email;
  return (
    <main>
      {user ? <SignOut>{`you are logged in as ${user}`}</SignOut> : <SignIn />}
    </main>
  )
}
