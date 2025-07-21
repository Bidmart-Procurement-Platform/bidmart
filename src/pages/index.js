import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Bidmart Docs"
      description="Документация по платформе автоматизации закупок"
    >
      <main className="container">
        <div style={{padding: '4rem 0', textAlign: 'center'}}>
          <img src="https://www.bidmart.by/img/logo-small.svg" alt="Bidmart Logo" style={{height: 70, marginBottom: 32}} />
          <h1>Документация Bidmart</h1>
          <p>
            Современная система управления закупками и контрактами.<br/>
            <a href="/docs/quickstart" className="button button--primary" style={{marginTop: 24}}>
              Быстрый старт
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
