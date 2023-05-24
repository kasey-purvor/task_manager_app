import FormLine from "./formLine";
import { data } from "../data/data";
export default function Form({ formType }) {
  const formData = data.forms.filter((form) => form.type === formType)[0];
  let renderedForm = formData.formRows.map((formLine) => (
    <>
    <FormLine
      id={formLine.desc}
      desc={formLine.desc}
      additionalInfo={formLine.additionalInfo}
      formLineType={formLine.formLineType}
      placeholderText={formLine.placeholderText}
    />
    <br />
    </>
  ));
  return (
    <main className="p-6 max-h-80  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl">
        {renderedForm}
    </main>
  )
}
