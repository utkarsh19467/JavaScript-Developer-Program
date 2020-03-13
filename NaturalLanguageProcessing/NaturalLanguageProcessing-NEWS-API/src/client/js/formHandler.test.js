import { getValueFromForm } from './formHandler'

test('getValueFromForm() should be able to get value from Form field.', () => {
    document.body.innerHTML =
    '<div>' +
    '<input id="text" type="text" name="input" value="Text called" placeholder="Text">'
    '</div>';

    const formInput = getValueFromForm();
    expect(formInput).toBe("Text called")
});