import parseCamelCaseString from "../../../utils/parseCammelCaseString";

const parseErrorMessage = (error: Error) => {
  const errorMessage = parseCamelCaseString(error.message);
  const match = errorMessage.match(/^.*?`number`/);
  const relevantTextPart = match && parseCamelCaseString(match[0])

  const parsedMatch = relevantTextPart
    ?
    relevantTextPart.split('`').join('')
    :
    null

  const parsedErrorMessage = match ? parsedMatch : errorMessage

  return parsedErrorMessage
}

export default parseErrorMessage