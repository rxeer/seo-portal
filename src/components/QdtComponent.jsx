import React from 'react';
import PropTypes from 'prop-types';
import QdtComponents from 'qdt-components';
// import QdtComponents from 'qdtcomponents';

const options = {//
  config: {
    host: 'bipro.prozorro.org', // 'sense-demo.qlik.com', orange.rbcgrp.com, bipro.prozorro.org'
    secure: false, //
    port: 80, // 443
    prefix: 'new2', // www
    appId: '1def32a1-4fbb-4df7-b7a6-956de8dc6c3c', // '133dab5d-8f56-4d40-b3e0-a6b401391bde', // Helpdesk
  },
  connections: {
    vizApi: true,
    engineApi: true,
  },
};

const qdtComponents = new QdtComponents(options.config, options.connections);
// const qDoc = await qdtComponents.qDocPromise;
// const qField = await qDoc.getField('Status');
// qField.selectMatch('Active', true);

// const qObject = await qDoc.createSessionObject(qProp);

export default class QdtComponent extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  componentDidMount() {
    const { type, props } = this.props;
    qdtComponents.render(type, props, this.node);
  }

  componentWillUnmount() {
    QdtComponents.unmountQdtComponent(this.node);
  }

  render() {
    return (
      <div className={this.props.className} ref={(node) => { this.node = node; }} />
    );
  }

}
