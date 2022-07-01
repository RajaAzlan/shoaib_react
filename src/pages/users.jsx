import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import ReactPaginate from 'react-paginate';
import Table from '@/components/Table';
import { Link } from 'react-router-dom';
import cardStyles from '@/assets/scss/layout/_card.module.scss';
import '@/assets/scss/layout/_structure.scss';
import '@/assets/scss/components/_dropdowns.scss';

function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [adminUsers, setAdminUsers] = useState([
    {
      email: 'hr@gmail.com',
      name: 'Hr Mangocoders',
      role: 'hr',
      status: 'active',
      username: 'hr',
      _id: '622b2cb1f7b0449f351fb054',
    },
  ]);

  const tableHeader = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Role', value: 'role' },
    { heading: 'Status', value: 'status' },
    { heading: 'Action', value: 'edit' },
  ];

  const handlePageClick = (currentPage) => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Nav />
        <div className="inner-content">
          <section>
            <div className="container-fluid">
              <div className="row m-0">
                <div className="col-12">
                  <div className={cardStyles.card}>
                    <div
                      className={`d-flex flex-wrap align-items-center position-relative py-4 ${cardStyles.cardHeader} ${cardStyles.cardHeaderPrimary}`}
                    >
                      <div className={`${cardStyles.contentCardLeft}`}>
                        <h4
                          className={`${cardStyles.cardTitle} text-white mb-0`}
                        >
                          Admin Users
                        </h4>
                      </div>
                      <div className={`${cardStyles.contentCardRight} ms-auto`}>
                        <Link to="/add-user">
                          <button
                            type="button"
                            className="btn  ms-auto rounded-circle p-0 text-dark"
                          >
                            +
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className={`${cardStyles.cardBody}`}>
                      <div className="header-content">
                        <div className="table-responsive mb-0">
                          <Table
                            tableHeader={tableHeader}
                            tableBody={adminUsers}
                          />
                        </div>
                        <ReactPaginate
                          previousLabel={'previous'}
                          nextLabel={'next'}
                          breakLabel={'...'}
                          breakClassName={'break-me'}
                          pageCount={totalPages}
                          pageRangeDisplayed={totalPages}
                          containerClassName={'pagination'}
                          activeClassName={'active'}
                          renderOnZeroPageCount={null}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Users;
