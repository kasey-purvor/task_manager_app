export default function FormLine({
  desc,
  additionalInfo,
  formLineType,
  placeholderText,
  onTextChange,
  
}) {
    function handleChange(e) {
        onTextChange(e.target.value);
    }
  return (
    <>
    <p className="text-medium text-gray-800 mt-2">
      {desc}
    </p>
      <input
        type={formLineType}
        onChange={handleChange}
        className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400`}
        placeholder={placeholderText}
        aria-describedby="hs-input-helper-text"
      />
      <p className="text-sm text-gray-500 mt-2" id="hs-input-helper-text">
        {additionalInfo}
      </p>
    </>
  );
}
