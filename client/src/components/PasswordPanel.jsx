import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux'
import * as users from '../redux/user/actions/auth';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function PasswordPanel() {
    const classes = useStyles();
    const [password, setPassword] = useState("")
    const userId = useSelector(state => state.user.profile.id)

    const dispatch = useDispatch()

    const submitPassword = () => {
        dispatch(users.changePassword(password, userId))
    }
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Password</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <input placeholder="Enter Password" onChange={e => setPassword(e.target.value)}
                            value={password} type="password" />
                        <input placeholder="Confirm Password" type="password" />
                        <button onClick={() => submitPassword()} className="btn"> Submit </button>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}