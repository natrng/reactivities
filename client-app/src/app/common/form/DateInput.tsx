import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { FormFieldProps, Form, Label } from 'semantic-ui-react'
import { DateTimePicker } from 'react-widgets';

interface IProps extends FieldRenderProps<Date, HTMLInputElement>, FormFieldProps {
}
export const DateInput: React.FC<IProps> = ({ input, width, id = null, date = false, time = false, placeholder, meta: { touched, error }, ...rest }) => {
	return (
		<Form.Field error={touched && !!error} width={width}>
			<DateTimePicker
				onBlur={input.onBlur}
				onKeyDown={(e)=>e.preventDefault()}
				placeholder={placeholder}
				value={input.value || null}
				onChange={input.onChange}
				date={date}
				time={time}
				{...rest}
			/>
			{touched && error && (
				<Label basic color='red'>{error}</Label>
			)}
		</Form.Field>
	)
}
