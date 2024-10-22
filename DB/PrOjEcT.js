const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchData() {
  let { data, error } = await supabase
    .from('your_table_name')
    .select('*');
  
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Data fetched:", data);
  }
}

fetchData();
