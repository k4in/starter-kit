export default function Header() {
  const id = crypto.randomUUID();

  return <header className="bg-blue-600">{id}</header>;
}
