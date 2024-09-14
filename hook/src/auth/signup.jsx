import { useState } from "react";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      setLoading(true);
      console.log(email, password);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "users", user.user.uid);
      const documentAdded = setDoc(docRef, {
        username,
        email,
        uid: user.user.uid,
      });
      console.log("user==>", "document add hogya he", user.user.uid);
      navigate("/");
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="my-3 font-bold">Sign Up</h1>
        <input
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="Username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button onClick={handleSignUp} isLoading={loading} text={"Signup"} />
      </div>
    </div>
  );
}
export default SignUp;