import Form from "./Form";
import { formData } from "./formData";

function View() {
  return (
    <div >
     <Form formData={formData} />
    </div>
  );
}

export default View;