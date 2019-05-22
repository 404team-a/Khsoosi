import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form className="sign">
				<div className="form-group">
					<h1 id="login">login</h1>
					<label>Email address</label>
					<input
						className="form-control"
						name="email"
						onChange={this.props.change.bind(this)}
						placeholder="example@gmail.com"
					/>
					<label>Password</label>
					<input
						className="form-control"
						name="password"
						type="password"
						onChange={this.props.change.bind(this)}
						placeholder="*******"
					/>
				</div>
				<button className="btn btn-primary" onClick={this.props.loging.bind(this)}>
					Submit
				</button>
				<label>{this.props.loginMessage}</label>
				<label id="error">{this.props.errorLogin}</label>
			</form>
		);
	}
}

export default Login;
