import { memberSubscriptions } from "@appConfig";
import { ConnectUser } from '../ConnectUser';
import { useState } from 'react';
import WalletButton from "@components/WalletButtonVerticalBig";

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const subscribeMe = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    const res = await fetch("/api/subscribe", {
       body: JSON.stringify({ email: email }),
       headers: { 'Content-Type': 'application/json' },
       method: "POST",
    });
  
   const { error, message } = await res.json();
    if (error) {
       setError(error);
    } else {
       setSuccess(message);
    }
  };
  
  const changeEmail = (event: { target: { value: any; }; }) => {
   const email = event.target.value;
   setEmail(email);
  }

  return (
    <>
      {/* <div className="border border-gray-200 rounded p-6 my-4 w-full bg-gray-50">
        <p className="text-gray-900 mb-6 text-lg md:text-xl">
           Want to keep your brain engaged with great UI/UX learning content?
        </p>
        <p className="text-gray-800 dark:text-gray-400 mb-10 text-base">
          Enter your email address and you'll be be added to my email newsletter, of which you can opt out any time.
        </p>
        <form className="relative my-4" onSubmit={subscribeMe}>
          <input
            onChange={changeEmail}
            aria-label="Email for newsletter"
            placeholder="example@email.com"
            type="email"
            autoComplete="email"
            required
            className="py-4 px-0 text-md bg-transparent w-9/12 text-gray-900 border-b-2 border-gray-600 dark:border-gray-400 dark:text-white focus:border-brand focus-visible:outline-none"
          />
          <button
            className="flex justify-center px-5 py-4 mt-8 bg-green-600 text-white font-bold text-lg"
            type="submit"
          >
            Subscribe
          </button>
        </form>

        {success 
       ? 
            <span className="flex items-center text-sm font-bold text-green-700"> 
                {success}
            </span> 
              : 
            <span className="flex items-center text-sm font-bold text-red-800">
                  {error} 
            </span>
        } 
      </div>*/}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <WalletButton />
      </div>
    </>
  );
}