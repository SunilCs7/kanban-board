// components/KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';

// Import Icons
import inProgress from '../assets/icons_FEtask/in-progress.svg';
import todo from '../assets/icons_FEtask/To-do.svg';
import backlog from '../assets/icons_FEtask/Backlog.svg';
import noPriorityIcon from '../assets/icons_FEtask/No-priority.svg';

import plus from '../assets/icons_FEtask/add.svg';
import down from '../assets/icons_FEtask/3 dot menu.svg';

function KanbanBoard({ tickets, users, groupBy, sortBy }) {
    const groupTickets = (tickets) => {
        return tickets.reduce((acc, ticket) => {
            const key = ticket[groupBy] || 'No Group';
            acc[key] = acc[key] || [];
            acc[key].push(ticket);
            return acc;
        }, {});
    };

    const sortTickets = (tickets) => {
        return tickets.sort((a, b) => {
            if (sortBy === 'priority') return b.priority - a.priority;
            if (sortBy === 'title') return a.title.localeCompare(b.title);
            return 0;
        });
    };

    const groupedTickets = groupTickets(tickets);


    // Icons
    const getPriorityIcon = (priority) => {
        switch (priority) {
            case 'Todo':
                return todo;
            case 'In progress':
                return inProgress;
            case 'Backlog':
                return backlog;
            default:
                return noPriorityIcon;
        }
    }


    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((group) => (
                // Card
                <div className="kanban-column" key={group}>

                    {/* Heading */}
                    <div className="headingCard">
                        <div className="headingLeft">
                            <img src={getPriorityIcon(tickets?.status)} alt="." className="icon" />

                            <h2 className='heading'>{group}</h2>
                        </div>

                        <div className="headingRight">
                            <img src={plus} alt="plus" className="headingIcon" />

                            <img src={down} alt="down" className="headingIcon" />
                        </div>

                    </div>

                    {sortTickets(groupedTickets[group]).map(ticket => (
                        <TicketCard key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KanbanBoard;
