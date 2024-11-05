// components/TicketCard.js
import React from 'react';
import urgentColourIcon from '../assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import highPriorityIcon from '../assets/icons_FEtask/Img - High Priority.svg';
import mediumPriorityIcon from '../assets/icons_FEtask/Img - Medium Priority.svg';
import lowPriorityIcon from '../assets/icons_FEtask/Img - Low Priority.svg';
import noPriorityIcon from '../assets/icons_FEtask/No-priority.svg';

import './TicketCard.css'

function TicketCard({ ticket, user }) {
    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 4:
                return urgentColourIcon;
            case 3:
                return highPriorityIcon;
            case 2:
                return mediumPriorityIcon;
            case 1:
                return lowPriorityIcon;
            case 0:
                return noPriorityIcon;
            default:
                return noPriorityIcon;
        }
    };


    return (
        // Card Design
        <div className="card">
            <div className="userData">

                <div className="userName">
                    {ticket?.id}
                </div>

                <div className="profilePic">
                    <p className="username">U</p>
                    <div className="availableStatus"></div>
                </div>

            </div>

            {/* User Info */}
            <div className="userInfo">
                <h className="title">
                    {ticket.title}
                </h>

                <div className="lower">
                    <img src={getPriorityIcon(ticket.priority)} alt="PriorityIcon" className="icon" />

                    <div className="lowerSecond">
                        <div className="status"></div>

                        <div className="request">{ticket?.tag}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TicketCard;

