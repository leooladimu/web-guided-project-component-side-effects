import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
margin: 4px 0 4px 0;
background-color: ${pr => pr.theme.primaryColor};
`


const Friend = props => {
    return (
        <StyledFriend>        
            {props.info.name}
            <button onClick={() => openDetails(props.info.id)}>
                See details
            </button>
        </StyledFriend>
    )
}

export default Friend;

// .friend {
//     width: 60%;
//     display: flex;
//     justify-content: space-between;
//     margin: 4px 0 4px 0;
//   }