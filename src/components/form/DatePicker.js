import React from 'react';
import DatePickerReact from 'react-datepicker';
import moment from 'moment';
import constants from '../../common/constants';

export default class DatePicker extends React.Component {

	render() {
		const { input, label, type, isDisabled, disabled, className, meta: { touched, error, warning } } = this.props;

		let containerClassName = (touched && error) ? "form-group has-error" : "form-group";
		return (<div className={containerClassName}>
			<label>{label}</label>
			<DatePickerReact readOnly
				showYearDropdown
				scrollableYearDropdown 
				placeholderText={label}
				dateFormat={constants.DEFAULT_DATE_FORMAT} className={className} {...input} selected={input.value ? moment(input.value) : moment()} />
			{touched && error && <span className="error-validation">{error}</span>}
		</div>);

	}
}
