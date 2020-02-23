import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import * as account from '../redux/account/actions/acount'
import Select from '@material-ui/core/Select'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function AccountCapture () {
    const classes = useStyles();
    const [accountName, setAccountName] = useState()
    const [accountNumber, setAccountNumber] = useState()
    const userId = useSelector(state => state.user.profile.id)
    const accountInfo = useSelector(state => state.account.accountInfo)
    const [errors, setError] = useState({ accountNumber: "" });

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAccountName(e.target.value)
        // console.log("option for account name", e.target.value)
    }
    const submitAccountInfo = () => {
        setError({})
        setAccountNumber("")
        var regex = /^[0-9-+()]*$/;
        var letters = /^[0-9a-zA-Z]+$/;
        var errors = {}
        if (accountNumber !== undefined && !accountNumber.match(letters)) {
            errors.accountNumber = "Invalid accountNumber";
            setError(errors)
            return
        }

        if (accountNumber !== undefined && accountNumber.split('').length < 8) {
            errors.accountNumber = "Invalid accountNumber";
            setError(errors)
            return
        }


        if (accountInfo.account_name !== undefined) {
            dispatch(account.updateAccountInfo({ accountName, accountNumber }))
            setError({})
            setAccountNumber("")
            setAccountName("")
            dispatch(account.getAccountInfo())
            return
        }

        dispatch(account.saveAccountInfo({ accountName, accountNumber }))
        setError({})
        setAccountNumber("")
        setAccountName("")
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Account Info</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <div>
                            <div>
                                <label htmlFor="">
                                    Acount Name :
                            </label>
                                <span>
                                    {accountInfo.account_name && accountInfo.account_name.split(/(?=[A-Z])/).join(" ")}
                                </span>
                            </div>
                            <div>
                                <label htmlFor="">
                                    Acount Number :
                            </label>
                                <span>
                                    {accountInfo.account_number}
                                </span>
                                <div>
                                    {}
                                </div>
                            </div>
                        </div>
                        {/* <input placeholder="Account Name"
                            onChange={e => setAccountName(e.target.value)}
                            value={accountName} type="text" />
 */}
                        <br />
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                            <Select
                                native
                                onChange={(e) => handleChange(e)}
                                value={accountName}
                                inputProps={{
                                    id: 'filled-age-native-simple',
                                }}
                            >

                                <option>  List of Banks  </option>
                                <option value={"absaGroup"}>Absa Group</option>
                                <option value={"africanBank"}>African Bank</option>
                                <option value={"bidvestBank"}>Bidvest Bank</option>
                                <option value={"capitecBank"}>Capitec Bank</option>
                                <option value={"discoveryLimited"}>Discovery Limited</option>
                                <option value={"firstRandBank"}>First Rand Bank</option>
                                <option value={"FnbGroupBotswana"} >FNB Group Botswana</option>
                                <option value={"FnbGroupLesotho"} >FNB Group Lesotho</option>
                                <option value={"FnbGroupMozambique"} >FNB Group Mozambique</option>
                                <option value={"FnbGroupNamibia"} >FNB Group Namibia</option>
                                <option value={"FnbGroupRsa"} >FNB Group SA</option>
                                <option value={"FnbGroupSwatziland"} >FNB Group Swatziland</option>
                                <option value={"FnbGroupTanzania"} >FNB Group Tanzania</option>
                                <option value={"FnbGroupZambia"} >FNB Group Zambia</option>
                                <option value={"grindrodBank"}>Grindrod Bank</option>
                                <option value={"imperialBankSouthAfrica"}>Imperial Bank South Africa</option>
                                <option value={"investecBank"}>Investec Bank</option>
                                <option value={"nedbank"}>Nedbank</option>
                                <option value={"standardBank"}>Standard Bank</option>
                                <option value={"tymeBank"}>Tyme Bank</option>
                                <option value={"ubank"}>Ubank</option>
                                <option value={"SasfinBank"}>Sasfin Bank</option>
                            </Select>
                            <div>
                                <input placeholder="Account Number"
                                    onChange={e => setAccountNumber(e.target.value)}
                                    value={accountNumber} type="text" />
                                <div style={{ color: "red" }}> {errors.accountNumber} </div>
                            </div>
                        </div>
                        <button onClick={() => submitAccountInfo()} className="btn"> Submit </button>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div >
    );
}