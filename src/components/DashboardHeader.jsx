import PropTypes from 'prop-types'

const DashboardHeader = ({ currentView }) => {
  const renderHeaders = () => {
    switch (currentView) {
      case 'products':
        return (
          <div className='dashboard-header-entries'>
            <p className='dashboard-header_id'>ID</p>
            <p className='dashboard-header_entry'>Nom</p>
            <p className='dashboard-header_entry'>Catégorie</p>
            <p className='dashboard-header_entry'>Prix</p>
            <p className='dashboard-header_entry'>Stock</p>
          </div>
        )
      case 'users':
        return (
          <div className='dashboard-header-entries'>
            <p className='dashboard-header_id'>ID</p>
            <p className='dashboard-header_entry'>Nom</p>
            <p className='dashboard-header_entry'>E-mail</p>
            <p className='dashboard-header_entry'>Commandes</p>
          </div>
        )
      case 'orders':
        return (
          <div className='dashboard-header-entries'>
            <p className='dashboard-header_id'>ID</p>
            <p className='dashboard-header_entry'>Client</p>
            <p className='dashboard-header_entry'>Statut</p>
            <p className='dashboard-header_entry'>Montant</p>
            <p className='dashboard-header_entry'>Articles</p>
          </div>
        )
    }
  }

  return <div className='dashboard-header'>{renderHeaders()}</div>
}

DashboardHeader.propTypes = {
  currentView: PropTypes.string,
}

export default DashboardHeader