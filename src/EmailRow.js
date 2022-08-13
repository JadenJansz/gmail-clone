import React from 'react'
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { IconButton } from '@mui/material';

import './EmailRow.css'
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

const EmailRow = ({ title, subject, description, time, id}) => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            title, 
            subject, 
            description, 
            time, 
            id
        }));

        history("/mail");
    }

  return (
    <div onClick={openMail} className='emailRow'> 
        <div className='emailRow__options'>
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />                
            </IconButton>
        </div>
        <h3 className='emailRow__title'>{title}</h3>
        <div className='emailRow__message'>
            <h4>{subject}{" "}
            <span className='emailRow__description'>-
                {description}
            </span>
            </h4>
        </div>
        <p className='emailRow__time'>{time}</p>
    </div>
  )
}

export default EmailRow