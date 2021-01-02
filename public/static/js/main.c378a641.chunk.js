(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  16(e, t, n) {},
  17(e, t, n) {
    n.r(t); const a = n(0); const o = n(1); const i = n.n(o); const c = n(7); const r = n.n(c); const s = (n(16), n(10)); const l = n(4); const u = n(2); const d = `${n.p}static/media/logo.c2821b38.svg`; const _ = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: d, alt: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0432\u0435\u0431=\u0441\u0430\u0439\u0442\u0430' }) }); }; const m = i.a.createContext(); const b = function (e) {
      const t = e.card; const n = e.onCardClick; const o = e.onLike; const c = e.onDelete; const r = i.a.useContext(m); if (!t) return null; const s = t.owner._id === r._id; const l = t.likes.some(((e) => e._id === r._id)); const u = 'gallery__delete-button '.concat(s ? '' : 'gallery__delete-button_display_none'); const d = 'gallery__like-button '.concat(l ? 'gallery__like-button_liked' : ''); return Object(a.jsxs)('div', {
        className: 'gallery__item',
        children: [Object(a.jsx)('button', { className: u, 'aria-label': '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443', onClick() { c(t); } }), Object(a.jsx)('img', {
          className: 'popup__open gallery__item-image', alt: t.name, src: t.link, onClick() { n(t); },
        }), Object(a.jsxs)('div', { className: 'gallery__item-description', children: [Object(a.jsx)('h2', { className: 'gallery__item-title', children: t.name }), Object(a.jsxs)('div', { className: 'gallery__like-container', children: [Object(a.jsx)('button', { className: d, onClick() { o(t); }, 'aria-label': '\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a' }), Object(a.jsx)('p', { className: 'gallery__like-counter', children: t.likes.length })] })] })],
      });
    }; const j = function (e) {
      const t = i.a.useContext(m); return t && e.cards ? Object(a.jsxs)('main', {
        children: [Object(a.jsxs)('section', {
          className: 'profile',
          children: [Object(a.jsxs)('div', {
            className: 'profile__info',
            children: [Object(a.jsxs)('div', {
              className: 'profile__avatar-container',
              children: [Object(a.jsx)('img', { className: 'profile__avatar', alt: '\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', src: t.avatar }), Object(a.jsx)('button', {
                className: 'profule__button profile__button_action_edit-avatar', type: 'button', 'aria-label': '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f', onClick: e.onEditAvatar,
              })],
            }), Object(a.jsxs)('div', {
              className: 'profile__part',
              children: [Object(a.jsxs)('div', { className: 'profile__initials', children: [Object(a.jsx)('h1', { className: 'profile__name', children: t.name }), Object(a.jsx)('p', { className: 'profile__job', children: t.about })] }), Object(a.jsx)('button', {
                className: 'profile__button popup__open profile__button_action_edit', id: 'popupEdit', type: 'button', 'aria-label': '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c', onClick: e.onEditProfile,
              })],
            })],
          }), Object(a.jsx)('button', {
            className: 'profile__button popup__open profile__button_action_add', id: 'popupAdd', type: 'button', 'aria-label': '\u041a\u043d\u043e\u043f\u043a\u0430', onClick: e.onAddPlace,
          })],
        }), Object(a.jsx)('section', {
          className: 'gallery',
          children: e.cards.map(((t) => Object(a.jsx)(b, {
            onDelete: e.onDelete, onLike: e.onLike, onCardClick: e.onCardClick, card: t,
          }, t._id))),
        })],
      }) : null;
    }; const p = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__copyright', children: '\xa9 2020 Mesto Russia' }) }); }; const f = function (e) {
      return Object(a.jsx)('section', {
        className: 'popup popup__'.concat(e.name, ' ').concat(e.isOpen ? 'popup__opened' : ''),
        children: Object(a.jsxs)('div', {
          className: 'popup__container',
          children: [Object(a.jsx)('p', { className: 'popup__title', children: e.title }), e.children, Object(a.jsx)('button', {
            onClick: e.onClose, className: 'popup__close-button popup__edit-close', type: 'button', 'aria-label': '\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443',
          })],
        }),
      });
    }; const h = function (e) {
      const t = e.card; const n = e.onClose; return Object(a.jsx)('section', {
        className: 'popup zoom '.concat(t !== null ? 'popup__opened' : ''),
        children: Object(a.jsxs)('div', {
          className: 'zoom__container',
          children: [Object(a.jsx)('button', {
            className: 'popup__close-button zoom__close-button', type: 'button', 'aria-label': '\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443', onClick: n,
          }), Object(a.jsx)('img', { className: 'zoom__image', alt: t !== null ? t.name : '', src: t !== null ? t.link : '' }), Object(a.jsx)('h2', { className: 'zoom__title', children: t !== null ? t.name : '' })],
        }),
      });
    }; function O(e) {
      const t = i.a.useRef(); return Object(a.jsx)(f, {
        onClose: e.onClose,
        isOpen: e.isOpen,
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        name: 'edit_action_avatar',
        children: Object(a.jsxs)('form', {
          className: 'form form__edit-avatar',
          onSubmit(n) { n.preventDefault(), e.onUpdateAvatar(t.current.value); },
          noValidate: !0,
          children: [Object(a.jsx)('input', {
            autoComplete: 'off', className: 'form__item form__item_action_edit-avatar', type: 'url', name: 'avatar', placeholder: '\u0421\u0441\u043b\u044b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440', required: !0, minLength: '2', id: 'name', ref: t,
          }), Object(a.jsx)('span', { className: 'form__input-error', id: 'name-error' }), Object(a.jsx)('button', {
            type: 'submit', className: 'form__submit-button', 'aria-label': '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443', children: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
          })],
        }),
      });
    } function x(e) {
      const t = e.isOpen; const n = e.onClose; const c = e.onUpdateUser; const r = i.a.useContext(m); const s = Object(o.useState)(); const l = Object(u.a)(s, 2); const d = l[0]; const _ = l[1]; const b = Object(o.useState)(); const j = Object(u.a)(b, 2); const p = j[0]; const h = j[1]; return Object(o.useEffect)((() => { r && (_(r.name), h(r.about)); }), [r]), Object(a.jsx)(f, {
        onClose: n,
        isOpen: t,
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        name: 'edit',
        children: Object(a.jsxs)('form', {
          className: 'form form__edit',
          onSubmit(e) { e.preventDefault(), c(d, p); },
          noValidate: !0,
          children: [Object(a.jsx)('input', {
            autoComplete: 'off', className: 'form__item form__item_action_edit-name', type: 'text', name: 'name', placeholder: '\u0418\u043c\u044f', required: !0, minLength: '2', maxLength: '40', id: 'name', onChange(e) { _(e.target.value); }, value: d,
          }), Object(a.jsx)('span', { className: 'form__input-error', id: 'name-error' }), Object(a.jsx)('input', {
            autoComplete: 'off', className: 'form__item form__item_action_edit-job', type: 'text', name: 'job', required: !0, placeholder: '\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439', minLength: '2', maxLength: '200', id: 'info', onChange(e) { h(e.target.value); }, value: p,
          }), Object(a.jsx)('span', { className: 'form__input-error', id: 'info-error' }), Object(a.jsx)('button', {
            type: 'submit', className: 'form__submit-button', id: 'editSubmiter', 'aria-label': '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443', children: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
          })],
        }),
      });
    } function v(e) {
      const t = Object(o.useState)(); const n = Object(u.a)(t, 2); const i = n[0]; const c = n[1]; const r = Object(o.useState)(); const s = Object(u.a)(r, 2); const l = s[0]; const d = s[1]; return Object(a.jsx)(f, {
        onClose: e.onClose,
        isOpen: e.isOpen,
        title: '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443',
        name: 'card',
        children: Object(a.jsxs)('form', {
          className: 'form form__card',
          onSubmit(t) { t.preventDefault(), e.onAddCard(i, l); },
          noValidate: !0,
          children: [Object(a.jsx)('input', {
            autoComplete: 'off', className: 'form__item form__item_action_edit-title', type: 'text', name: 'title', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', required: !0, minLength: '2', maxLength: '30', id: 'card-title', onChange(e) { c(e.target.value); },
          }), Object(a.jsx)('span', { className: 'form__input-error', id: 'card-title-error' }), Object(a.jsx)('input', {
            autoComplete: 'off', className: 'form__item form__item_action_edit-link', type: 'url', name: 'link', required: !0, placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', id: 'card', onChange(e) { d(e.target.value); },
          }), Object(a.jsx)('span', { className: 'form__input-error', id: 'card-error' }), Object(a.jsx)('button', {
            type: 'submit', className: 'form__submit-button', id: 'card-submit', 'aria-label': '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443', children: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
          })],
        }),
      });
    } const g = n(8); const C = n(9); const k = new (function () { function e(t) { Object(g.a)(this, e), this._baseUrl = t.baseUrl, this._token = t.token, this._headers = t.headers; } return Object(C.a)(e, [{ key: 'getInitialCards', value() { const e = this; return fetch(''.concat(this._baseUrl, '/cards'), { headers: { authorization: this._token } }).then(((t) => e._handleOriginalResponse(t))); } }, { key: 'getInitialsInfo', value() { const e = this; return fetch(''.concat(this._baseUrl, '/users/me'), { headers: { authorization: this._token } }).then(((t) => e._handleOriginalResponse(t))); } }, { key: 'postProfile', value(e, t) { const n = this; return fetch(''.concat(this._baseUrl, '/users/me'), { method: 'PATCH', headers: { authorization: this._token, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: e, about: t }) }).then(((e) => n._handleOriginalResponse(e))); } }, { key: 'postAvatar', value(e) { const t = this; return fetch(''.concat(this._baseUrl, '/users/me/avatar'), { method: 'PATCH', headers: { authorization: this._token, 'Content-Type': 'application/json' }, body: JSON.stringify({ avatar: e }) }).then(((e) => t._handleOriginalResponse(e))); } }, { key: 'handleLike', value(e, t) { const n = this; return t ? fetch(''.concat(this._baseUrl, '/cards/likes/').concat(e), { method: 'PUT', headers: { authorization: this._token, 'Content-Type': 'application/json' } }).then(((e) => n._handleOriginalResponse(e))) : fetch(''.concat(this._baseUrl, '/cards/likes/').concat(e), { method: 'DELETE', headers: { authorization: this._token, 'Content-Type': 'application/json' } }).then(((e) => n._handleOriginalResponse(e))); } }, { key: 'deleteCard', value(e) { const t = this; return fetch(''.concat(this._baseUrl, '/cards/').concat(e), { method: 'DELETE', headers: { authorization: this._token } }).then(((e) => t._handleOriginalResponse(e))); } }, { key: 'postCard', value(e, t) { const n = this; return fetch(''.concat(this._baseUrl, '/cards'), { method: 'POST', headers: { authorization: this._token, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: e, link: t }) }).then(((e) => n._handleOriginalResponse(e))); } }, { key: '_handleOriginalResponse', value(e) { return e.ok ? e.json() : Promise.reject('Error: '.concat(e.status)); } }]), e; }())({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17', headers: { 'Content-Type': 'applicationes/json' }, token: '16bbf0d2-da12-4d9c-809d-74b46ac64585' }); const N = function () {
      const e = Object(o.useState)(!1); const t = Object(u.a)(e, 2); const n = t[0]; const i = t[1]; const c = Object(o.useState)(!1); const r = Object(u.a)(c, 2); const d = r[0]; const b = r[1]; const g = Object(o.useState)(!1); const C = Object(u.a)(g, 2); const N = C[0]; const y = C[1]; const S = Object(o.useState)(null); const U = Object(u.a)(S, 2); const L = U[0]; const E = U[1]; function P() { b(!1), i(!1), y(!1), E(null); } const T = Object(o.useState)(); const z = Object(u.a)(T, 2); const A = z[0]; const R = z[1]; const D = Object(o.useState)(); const I = Object(u.a)(D, 2); const q = I[0]; const F = I[1]; return Object(o.useEffect)((() => { k.getInitialsInfo().then(((e) => { R(e); })).catch(((e) => { console.log(e); })), k.getInitialCards().then(((e) => { F(e); })).catch(((e) => { console.log(e); })); }), []), Object(a.jsx)(a.Fragment, {
        children: Object(a.jsxs)(m.Provider, {
          value: A,
          children: [Object(a.jsx)(_, {}), Object(a.jsx)(j, {
            onDelete(e) { k.deleteCard(e._id).then((() => { const t = q.filter(((t) => t._id !== e._id)); F(t); })).catch(((e) => { console.log(e); })); }, onLike(e) { const t = e.likes.some(((e) => e._id === A._id)); k.handleLike(e._id, !t).then(((t) => { const n = q.map(((n) => (n._id === e._id ? t : n))); F(n); })).catch(((e) => { console.log(e); })); }, cards: q, onCardClick: E, onEditProfile() { i(!n); }, onAddPlace() { y(!N); }, onEditAvatar() { b(!d); }, children: ' ',
          }), Object(a.jsx)(p, { children: ' ' }), Object(a.jsx)(x, {
            onUpdateUser(e, t) { k.postProfile(e, t).then((() => { R(Object(l.a)(Object(l.a)({}, A), {}, { name: e, about: t })), P(); })).catch(((e) => { console.log(e); })); }, onClose: P, isOpen: n, title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c', name: 'edit',
          }), Object(a.jsx)(O, { onUpdateAvatar(e) { k.postAvatar(e).then((() => { R(Object(l.a)(Object(l.a)({}, A), {}, { avatar: e })), P(); })).catch(((e) => { console.log(e); })); }, onClose: P, isOpen: d }), Object(a.jsx)(v, { onAddCard(e, t) { k.postCard(e, t).then(((e) => { F([e].concat(Object(s.a)(q))), P(); })).catch(((e) => { console.log(e); })); }, onClose: P, isOpen: N }), Object(a.jsx)(f, {
            onClose: P,
            title: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?',
            name: 'confirmation',
            children: Object(a.jsx)('form', {
              className: 'form confirmation__form',
              children: Object(a.jsx)('button', {
                type: 'submit', className: 'form__submit-button confirmation__button', id: 'card-submit', 'aria-label': '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443', children: '\u0414\u0430',
              }),
            }),
          }), Object(a.jsx)(h, { onClose: P, card: L, children: ' ' })],
        }),
      });
    }; const y = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 18)).then(((t) => { const n = t.getCLS; const a = t.getFID; const o = t.getFCP; const i = t.getLCP; const c = t.getTTFB; n(e), a(e), o(e), i(e), c(e); })); }; r.a.render(Object(a.jsx)(i.a.StrictMode, { children: Object(a.jsx)(N, {}) }), document.getElementById('root')), y();
  },
}, [[17, 1, 2]]]);
// # sourceMappingURL=main.c378a641.chunk.js.map
