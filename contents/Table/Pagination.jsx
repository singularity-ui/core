import PropTypes from 'prop-types'
import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

const Box = styled.div`
  padding-top: ${p => p.theme.padding.layout.medium};
  user-select: none;

  .Container {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .Li {
    display: inline-flex;
    min-width: calc(2.5rem + 2px);
  }

  .Link {
    background-color: ${p => p.theme.color.secondary.default};
    border: solid 1px ${p => p.theme.color.secondary.default};
    margin-left: 1px;
    border-radius: 0;
    color: white;
    cursor: pointer;
    flex-grow: 1;
    font-family: inherit;
    font-weight: 500;
    padding: ${p => p.theme.padding.button.medium};
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    transition-delay: 0s, 0s, 0s, 0s;
    transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
    transition-property: color, background-color, border-color, box-shadow;
    transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  }
  .Link:hover {
    background-color: ${p => p.theme.color.secondary.active};
  }

  .disabled {
    opacity: 0.65;
  }
  .disabled > .Link:hover {
    background-color: ${p => p.theme.color.secondary.default};
    cursor: default;
  }

  .selected > .Link {
    background-color: ${p => p.theme.color.secondary.active};
    cursor: default;
  }
  .selected > .Link:hover {
  }
`

const Pagination = props => (
  <Box>
    <ReactPaginate
      breakClassName="Li"
      breakLinkClassName="Link"
      containerClassName="Container"
      nextClassName="Li"
      nextLabel="►"
      nextLinkClassName="Link"
      pageClassName="Li"
      pageLinkClassName="Link"
      pageRangeDisplayed={3}
      previousClassName="Li"
      previousLabel="◄"
      previousLinkClassName="Link"
      {...props}
    />
  </Box>
)

Pagination.propTypes = {
  initialPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
}

export default Pagination
