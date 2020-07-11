import React from 'react';

class Voter extends React.Component {
		constructor (props) {
				super(props);
				this.state = {
						name: '',
						address: '',
						latitude: '',
						longitude: '',
						code: ''
				};
		}

	render() {
		return (
			<form>
                <div>
                <strong>Enter average time per voter</strong>
				<label>
					<input className="textBox" name="time" type="text" placeholder="Time"/>
				</label>
				<div>
				<button>Store time</button>
				</div>
				</div>
				<div>
					<strong>Calculate average time per voter</strong>
				</div>
				<button>Calculate</button>
				<div>
					<strong>Check Voter</strong>
				</div>
				<div>
					<button>Voter In</button>
					<button>Voter Out</button>
				</div>
			</form>
		);
	}
}
export default Voter;
