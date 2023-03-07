import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type } = this.props;
		const styleDataType = type === 'default' ? styles.blue : styles.red;
		return (
			<React.Fragment>
				{
				this.props.type && this.props.value ?
				<li data-notification-type={this.props.type} onClick={() => this.props.markAsRead(this.props.id)} className={css(styleDataType)}>{this.props.value}</li> : null
				}

				{this.props.html ? (<li data-urgent dangerouslySetInnerHTML={{ __html: this.props.html }} className={css(styleDataType)}></li>) : null}
			</React.Fragment>
		);
	}
};

const styles = StyleSheet.create({
	red: {
		color: 'red'
	},

	blue: {
		color: 'blue'
	}
});

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
	markAsRead: PropTypes.func,
	id: PropTypes.number
};

NotificationItem.defaultProps = {
	type: 'default',
	id: 0,
};

export default NotificationItem;