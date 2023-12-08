/**
 * Recibirá un form y unas definiciones como parámetros y hará las validaciones necesarias.
 *
 * En caso de que haya errores, devolverá un listado con los mensajes o sino, devolverá true.
 *
 * @param form HTMLFormElement
 * @param definitions Objeto con definiciones, con el siguiente formato:
 *
 * {
 *   fieldName: { required?: boolean, maxLength?: number, regExp?: RegExp, regExpMessage?: string },
 *   fieldName2: { required?: boolean, maxLength?: number, regExp?: RegExp, regExpMessage?: string },
 *   fieldName3: { required?: boolean, maxLength?: number, regExp?: RegExp, regExpMessage?: string },
 *   ...
 * }
 */
export function validateForm(form, definitions) {
  /**
   * Los fields o 'campos' son los distintos controles introducidos en el formulario.
   *
   * Con el método Object.keys obtenemos un listado de los campos que se desean validar.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   */
  const fields = Object.keys(definitions);

  /**
   * Vamos a mantener un objeto de errores en donde se almacenarán los distintos errores que vayamos encontrando
   * en el formulario.
   */
  const errors = {};

  /**
   * Vamos a mantener un objeto de valores en donde se almacenarán los distintos valores de los campos del formulario.
   */
  const values = {};

  /**
   * Iteramos sobre cada uno de los campos que obtuvimos más arriba con el método Object.keys.
   *
   * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of
   */
  for (const field of fields) {
    /**
     * El método querySelector está presente en todos los elementos del DOM de un documento HTML en el browser.
     *
     * https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
     *
     * El método querySelector permite consultar distintos elementos del DOM y obtenerlos para consultar sus propiedades
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
     *
     * En nuestro caso, queremos conocer el valor introducido en cada campo que deseamos validar.
     */
    const fieldElement = form.querySelector(`[name="${field}"]`);
    /**
     * La definición de la validación es pasada como parámetro.
     */
    const definition = definitions[field];

    /**
     * En cada condición de validación, se aplica la lógica correspondiente:
     */
    if (definition.required && fieldElement.value === '') {
      errors[field] = 'The field is required';
    } else if (
      definition.maxLength !== undefined &&
      fieldElement.value.length > definition.maxLength
    ) {
      errors[
        field
      ] = `The max length of field is exceeded: ${definition.maxLength}`;
    } else if (
      definition.regExp &&
      !fieldElement.value.match(definition.regExp)
    ) {
      errors[field] =
        definition.regExpMessage ??
        'The introduced value does not match the regular expression';
    } else {
      values[field] = fieldElement.value;
    }
  }

  /**
   * Si errors.length > 0, significa que hay errores, se devuelve el array que los contiene.
   */
  if (Object.keys(errors).length > 0) {
    const fieldToFocus = form.querySelector(
      `[name="${Object.keys(errors)[0]}"]`
    );

    /**
     * En caso de encontrar errores, hacemos foco sobre el primer campo que tenga error.
     */
    if (document.activeElement === fieldToFocus) {
      document.body.tabIndex = 0;
      document.body.focus();
      document.body.tabIndex = undefined;

      setTimeout(() => {
        fieldToFocus.focus();
      }, 150);
    } else {
      fieldToFocus.focus();
    }

    return { errors };
  }

  /**
   * Se devuelve true, indicando que todo salió bien.
   */
  return { values };
}
