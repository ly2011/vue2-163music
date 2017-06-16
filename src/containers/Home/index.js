import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './style.less';

// 关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/* actions*/
import * as comActions from '../../redux_store/actions/com';
import * as homeActions from '../../redux_store/actions/home';
class HomeContainer extends Component {
  componentDidMount() {
    const { fetchWeatherOfDay, fetchWeatherOf24H } = this.props.actions;
    fetchWeatherOfDay(() => {
      fetchWeatherOf24H();
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2 className={styles.title}>Home</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  com: state.settingState,
  home: state.homeState,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({ ...comActions, ...homeActions }, dispatch),
});
// export default HomeContainer;
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
