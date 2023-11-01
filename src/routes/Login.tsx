import React, { useEffect, useState } from "react";
import {
  createClient,
  PostgrestResponse,
  PostgrestSingleResponse,
} from "@supabase/supabase-js";

const supabase = createClient(
  "https://<project>.supabase.co",
  "<your-anon-key>"
);

interface Country {
  name: string;
  // 他のプロパティをここに追加
}

export default function Login(): JSX.Element {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {}

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}
