import { useState } from "react";
import Button from "../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";


function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      console.log(email, password);
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("🚀 ~ handleSignIn ~ user:", user);
      navigate("/");
      setLoading(false);
      
    } catch (err) {
      console.log("🚀 ~ handleSignIn ~ err:", err);
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="my-3 font-bold">Sign krke apne Kartoot Dekhlo</h1>
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

        <Button onClick={handleSignIn} isLoading={loading} text={"Login"} />
      </div>
    </div>
  );
}
export default SignIn;