export default function FormLine({
  desc,
  additionalInfo,
  formLineType,
  placeholderText,
}) {
  return (
    <>
      <label
        for="input-label-with-helper-text"
        className="block text-sm font-medium mb-2 text-black"
      >
        {desc}
      </label>
      <input
        type={formLineType}
        id="input-label-with-helper-text"
        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400"
        placeholder={placeholderText}
        aria-describedby="hs-input-helper-text"
      />
      <p class="text-sm text-gray-500 mt-2" id="hs-input-helper-text">
        {additionalInfo}
      </p>
    </>
  );
}
