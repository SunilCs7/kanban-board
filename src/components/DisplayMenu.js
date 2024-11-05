// components/DisplayMenu.js
import React, { useState } from 'react';

function DisplayMenu({ setGroupBy, setSortBy }) {
    const [isMainDropdownOpen, setMainDropdownOpen] = useState(false);
    const [isGroupByDropdownOpen, setGroupByDropdownOpen] = useState(false);
    const [isSortByDropdownOpen, setSortByDropdownOpen] = useState(false);

    const [groupByValue, setGroupByValue] = useState("Status");
    const [sortByValue, setSortByValue] = useState("Priority");

    const toggleMainDropdown = () => setMainDropdownOpen(!isMainDropdownOpen);
    const toggleGroupByDropdown = () => setGroupByDropdownOpen(!isGroupByDropdownOpen);
    const toggleSortByDropdown = () => setSortByDropdownOpen(!isSortByDropdownOpen);

    const handleGroupByChange = (value) => {
        setGroupByValue(value);
        setGroupBy(value.toLowerCase());
        setGroupByDropdownOpen(false);
    };

    const handleSortByChange = (value) => {
        setSortByValue(value);
        setSortBy(value.toLowerCase());
        setSortByDropdownOpen(false);
    };

    return (
        <div className="display-menu">
            <button onClick={toggleMainDropdown} className="dropdown-button">
                Display
            </button>

            {isMainDropdownOpen && (
                <div className="dropdown-content">

                    {/* Grouping Dropdown */}
                    <div className="dropdown-item">
                        <p className="grouping">Grouping</p>
                        <button onClick={toggleGroupByDropdown} className="dropdown-toggle">
                            <p className="groupingItems">{groupByValue}</p>
                        </button>

                        {isGroupByDropdownOpen && (
                            <div className="nested-dropdown">
                                <button onClick={() => handleGroupByChange('Status')}>Status</button>
                                <button onClick={() => handleGroupByChange('User')}>User</button>
                                <button onClick={() => handleGroupByChange('Priority')}>Priority</button>
                            </div>
                        )}
                    </div>

                    {/* Ordering Dropdown */}
                    <div className="dropdown-item">
                        <p className='ordering'>Ordering</p>
                        <button onClick={toggleSortByDropdown} className="dropdown-toggle">
                            <p className="orderingItems">{sortByValue}</p>
                        </button>

                        {isSortByDropdownOpen && (
                            <div className="nested-dropdown">
                                <button onClick={() => handleSortByChange('Priority')}>Priority</button>
                                <button onClick={() => handleSortByChange('Title')}>Title</button>
                            </div>
                        )}
                    </div>


                </div>
            )}

        </div>
    );
}

export default DisplayMenu;
