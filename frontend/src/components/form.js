import FormLine from "./formLine";
import { data } from "../data/data";
export default function Form({ formType }) {
  const formData = data.forms.filter((form) => form.type === formType)[0];
  let renderedForm = formData.formRows.map((formLine) => (
    <>
    <FormLine
      desc={formLine.desc}
      additionalInfo={formLine.additionalInfo}
      formLineType={formLine.formLineType}
      placeholderText={formLine.placeholderText}
    />
    <br />
    </>
  ));
  return (
    <main className="w">
        {renderedForm}
    </main>
  )
}
