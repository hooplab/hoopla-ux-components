import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }

  render() {
    const { currentPage, total } = this.props;

    let all = [];
    for (let i = 1; i <= total; i++) {
      all.push(i);
    }

    let addDots = false;

    return (
      <div className="pagination">
        <div className="pagination-item">&laquo;</div>
        {all.map(item => {
          if (item === currentPage) {
            return <div className="pagination-item pagination-active">{item}</div>
          } else {
            return <div className="pagination-item">{item}</div>
          }
        })}
        <div className="pagination-item">&raquo;</div>
      </div>
    );
  }
}


// <div class="pagination-centered">
//     <ul class="pagination">
//         <% if(total > limit) { %>
//         <li class="arrow <%= (offset === 0 ? 'unavailable':'') %>"><a data-modifier="offset=0" data-pagination-offset="0">&laquo;</a></li>
//         <% var pages = total/limit; %>
//         <% var currentPage = offset/limit; %>
//         <% var addDots = false; %>
//         <% for(var page = 0; page < pages; page++) { %>
//           <% if ((currentPage - 2 <= page && page <= currentPage + 2) || (pages - 3 <= page && page <= pages) || (0 <= page && page <= 2)) { %>
//             <li class="<%= (offset === page*limit?'current':'') %>"><a data-modifier="offset=<%= page*limit%>" data-pagination-offset="<%= page*limit %>"><%= page+1 %></a></li>
//             <% addDots = true; %>
//           <% } else if (addDots) { %>
//             <li class="unavailable"><a>&hellip;</a></li>
//             <% addDots = false; %>
//           <% } %>
//         <% } %>
//         <li class="arrow <%= (offset+limit > total? 'unavailable':'') %>"><a data-modifier="offset=<%= Math.ceil((total-limit)/limit)*limit%>" data-pagination-offset="<%= Math.ceil((total-limit)/limit)*limit%>">&raquo;</a></li>
//         <% } %>
//     </ul>
// </div>

