"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { generatePatientCode } from "@/lib/generatePatientCode";

export default function PatientRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
    <div>
  <label className="block text-sm text-slate-400 mb-1">
    Confirm Password
  </label>

  <input
    type="password"
    className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg"
    onChange={(e) =>
      setFormData({
        ...formData,
        confirmPassword: e.target.value,
      })
    }
    required
  />
</div>
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const patientCode = generatePatientCode();

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const userId = data.user?.id;

    if (!userId) {
      alert("Unable to create account.");
      return;
    }

    const { error: dbError } = await supabase
      .from("patients")
      .insert({
        auth_user_id: userId,
        email: formData.email,
        full_name: formData.name,
        patient_code: patientCode,
      });

    if (dbError) {
      alert(dbError.message);
      return;
    }

    alert(
      `Account created!\n\nYour Patient ID is:\n${patientCode}\n\nSave this ID.`
    );

    router.push("/patient/character");

  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};    e.preventDefault();
    // Supabase signUp logic here
    router.push('/patient/character');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Create Account</h1>
        <p className="text-slate-400 text-center mb-8">Your recovery journey begins...</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-lg"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="w-full bg-purple-600 hover:bg-violet-600 text-white font-bold py-3 rounded-lg mt-4">
            Create Hero
          </button>
        </form>
      </div>
    </div>
  );
}
