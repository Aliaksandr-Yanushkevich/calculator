import React, { Component } from "react";
import { Button } from 'react-bootstrap';

const Tab = ({ tabName, changeTabHandler }) => {
    return <Button onClick={changeTabHandler} variant='primary' size='lg'>{tabName}</Button>
}

const creditType = {
    LOAN: 0,
    LEASE: 1
}

class Loan extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>Hey</>;
    }
}

class Lease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <form>
            <label>
                Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
        </form>;
    }
}

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.creditType === creditType.LOAN && <Loan />}
            {this.props.creditType === creditType.LEASE && <Lease />}
        </div>
    }
}

export class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditType: creditType.LOAN
        }
        this.changeTabHandler.bind(this);
    }

    changeTabHandler(creditType) {
        this.setState(() => ({ creditType: creditType }));
    }

    render() {
        return <div>
            <Tab tabName='Loan' changeTabHandler={() => this.changeTabHandler(loan)} />
            <Tab tabName='Lease' changeTabHandler={() => this.changeTabHandler(lease)} />
            <Info creditType={this.state.creditType} />
        </div>
    }
}