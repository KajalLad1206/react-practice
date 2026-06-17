import { useNavigate, Outlet } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  }

  return (
    <main>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Submit Form</button>
      <Outlet /> {/* This is used to render the child routes of the Contact component */}
    </main>
  )
}
