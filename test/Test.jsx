import React, { Component } from 'react';
import DatePicker from 'react-date-picker/src/entry';

import LocaleOptions from './LocaleOptions';
import NativeOptions from './NativeOptions';
import ValueOptions from './ValueOptions';

import './Test.less';

const now = new Date();

export default class Test extends Component {
  state = {
    locale: null,
    preferNative: false,
    value: now,
  }

  onChange = value => this.setState({ value })

  render() {
    const {
      locale,
      preferNative,
      value,
    } = this.state;

    const setState = state => this.setState(state);

    return (
      <div className="Test">
        <header>
          <h1>react-date-picker test page</h1>
        </header>
        <div className="Test__container">
          <aside className="Test__container__options">
            <LocaleOptions
              setState={setState}
              locale={locale}
            />
            <NativeOptions
              setState={setState}
              preferNative={preferNative}
            />
            <ValueOptions
              setState={setState}
              value={value}
            />
          </aside>
          <main className="Test__container__content">
            <DatePicker
              locale={locale}
              onChange={this.onChange}
              preferNative={preferNative}
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}