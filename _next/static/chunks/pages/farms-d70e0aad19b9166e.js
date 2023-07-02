;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [669],
  {
    165: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/farms',
        function () {
          return c(1244)
        }
      ])
    },
    6e3: function (a, b, c) {
      'use strict'
      c.d(b, {
        XG: function () {
          return e
        },
        Gw: function () {
          return d
        },
        ZP: function () {
          return n
        },
        Yb: function () {
          return o
        }
      })
      var d,
        e,
        f,
        g,
        h = c(4924),
        i = c(6042),
        j = c(9396),
        k = c(1711),
        l = JSON.parse(
          '[{"inputs":[{"internalType":"contract Kibble","name":"_kib","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_kibPerSecond","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MaxAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kib","outputs":[{"internalType":"contract Kibble","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kibPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxKibPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingKIB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accKIBPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_kibPerSecond","type":"uint256"}],"name":"setKibPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
        )
      ;((f = d || (d = {})).LP = 'LP'),
        (f.SAS = 'SAS'),
        ((g = e || (e = {})).CoreFarm = 'CoreFarm'),
        (g.CommunityFarm = 'CommunityFarm'),
        (g.SASFarm = 'SASFarm')
      var m = [
          {
            id: 'kib-wdoge',
            name: 'KIB-WWDOGE',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 0,
            depositToken: k.b['kib-wdoge-lp'],
            lpPair: [k.b.kib, k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'kib-usdc-m',
            name: 'KIB-USDC.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 3,
            depositToken: k.b['kib-usdc-m-lp'],
            lpPair: [k.b.kib, k.b['usdc-m']],
            rewardTokens: [k.b.kib],
            flags: { deprecated: !0 }
          },
          {
            id: 'kib-dc',
            name: 'KIB-DC',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 13,
            depositToken: k.b['kib-dc-lp'],
            lpPair: [k.b.kib, k.b.dc],
            rewardTokens: [k.b.kib],
            flags: { deprecated: !0 }
          },
          {
            id: 'skib',
            name: 'sKIB',
            type: d.SAS,
            category: e.SASFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 16,
            depositToken: k.b.skib,
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'dc-wdoge',
            name: 'DC-WWDOGE',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 11,
            depositToken: k.b['dc-wdoge-lp'],
            lpPair: [k.b.dc, k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'dc-usdc',
            name: 'DC-USDC.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 17,
            depositToken: k.b['dc-usdc-m-lp'],
            lpPair: [k.b['usdc-m'], k.b.dc],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'wdoge-usdc-m',
            name: 'WWDOGE-USDC.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 1,
            depositToken: k.b['wdoge-usdc-m-lp'],
            lpPair: [k.b['usdc-m'], k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'wdoge-usdt-m',
            name: 'WWDOGE-USDT.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 9,
            depositToken: k.b['wdoge-usdt-m-lp'],
            lpPair: [k.b.wdoge, k.b['usdt-m']],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'wdoge-dai-m',
            name: 'WWDOGE-DAI.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 10,
            depositToken: k.b['wdoge-dai-m-lp'],
            lpPair: [k.b['dai-m'], k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { deprecated: !0 }
          },
          {
            id: 'wdoge-eth-m',
            name: 'WWDOGE-ETH.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 2,
            depositToken: k.b['wdoge-eth-m-lp'],
            lpPair: [k.b['eth-m'], k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'eth-s-eth-m',
            name: 'ETH.s-ETH.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 6,
            depositToken: k.b['eth-s-eth-m-lp'],
            lpPair: [k.b['eth-s'], k.b['eth-m']],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'usdc-s-usdc-m',
            name: 'USDC.s-USDC.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 12,
            depositToken: k.b['usdc-s-usdc-m-lp'],
            lpPair: [k.b['usdc-s'], k.b['usdc-m']],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'usdt-s-usdt-m',
            name: 'USDT.s-USDT.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 7,
            depositToken: k.b['usdt-s-usdt-m-lp'],
            lpPair: [k.b['usdt-s'], k.b['usdt-m']],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'dai-s-dai-m',
            name: 'DAI.s-DAI.m',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 8,
            depositToken: k.b['dai-s-dai-m-lp'],
            lpPair: [k.b['dai-s'], k.b['dai-m']],
            rewardTokens: [k.b.kib],
            flags: { deprecated: !0 }
          },
          {
            id: 'chewy-wdoge',
            name: 'CHEWY-WWDOGE',
            type: d.LP,
            category: e.CommunityFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 15,
            depositToken: k.b['chewy-wdoge-lp'],
            lpPair: [k.b.chewy, k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { new: !0 }
          },
          {
            id: 'skib-kib',
            name: 'sKIB-KIB',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 14,
            depositToken: k.b['skib-kib-lp'],
            lpPair: [k.b.skib, k.b.kib],
            rewardTokens: [k.b.kib],
            flags: { deprecated: !0 }
          },
          {
            id: 'wdoge-usdc-s',
            name: 'WWDOGE-USDC.s',
            type: d.LP,
            category: e.CoreFarm,
            chain: 'dogechain',
            address: '0x1709b8076F9ecb6b30567A6980754A9E5c33F837',
            abi: l,
            pid: 5,
            depositToken: k.b['wdoge-usdc-s-lp'],
            lpPair: [k.b['usdc-s'], k.b.wdoge],
            rewardTokens: [k.b.kib],
            flags: { deprecated: !0 }
          }
        ],
        n = m,
        o = m.reduce(function (a, b) {
          return (0, j.Z)((0, i.Z)({}, a), (0, h.Z)({}, b.id, b))
        }, {})
    },
    1244: function (a, b, c) {
      'use strict'
      c.r(b),
        c.d(b, {
          default: function () {
            return ab
          }
        })
      var d,
        e = c(5893),
        f = c(7568),
        g = c(4051),
        h = c.n(g),
        i = c(3020),
        j = c.n(i),
        k = c(4020),
        l = c(6616),
        m = c(155),
        n = c(7294),
        o = c(9099),
        p = c(323),
        q = c(2363),
        r = c(4698),
        s = c(3792),
        t = c(4023),
        u = c.n(t),
        v = c(5951),
        w = c.n(v),
        x = c(7044),
        y = c(6e3),
        z = c(1664),
        A = c.n(z),
        B = c(4431),
        C = c.n(B),
        D = c(782)
      function E (a) {
        var b,
          c,
          d,
          g,
          i,
          j,
          l,
          t = a.farm,
          v = a.status,
          z = a.open,
          B = a.balance,
          E = a.deposit,
          F = a.setOpen,
          G = a.add,
          H = a.remove,
          I = a.checkAllowance,
          J = (0, x.Ge)().account,
          K = (0, n.useState)(''),
          L = K[0],
          M = K[1],
          N = (0, n.useState)(!1),
          O = N[0],
          P = N[1],
          Q = (0, n.useState)(!1),
          R = Q[0],
          S = Q[1]
        ;(0, n.useEffect)(
          function () {
            var a
            ;((a = (0, f.Z)(
              h().mark(function a () {
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (!('' !== L)) {
                          a.next = 6
                          break
                        }
                        return (a.t0 = S), (a.next = 4), I(L)
                      case 4:
                        ;(a.t1 = a.sent), (0, a.t0)(a.t1)
                      case 6:
                      case 'end':
                        return a.stop()
                    }
                }, a)
              })
            )),
            function () {
              return a.apply(this, arguments)
            })()
          },
          [L]
        )
        var T = function () {
            F(!1), M(''), P(!1)
          },
          U = function (a) {
            T(),
              D.Am.update(a, {
                render: 'Success',
                type: 'success',
                isLoading: !1,
                autoClose: 5e3
              })
          },
          V = function (a, b) {
            T(),
              D.Am.update(b, {
                render: ''.concat(a),
                type: 'error',
                isLoading: !1,
                autoClose: 5e3
              })
          },
          W = t.depositToken.decimals,
          X = new (C())(B).shiftedBy(W),
          Y = new (C())(E).shiftedBy(W)
        'add' === v
          ? ((b = {
              25: X.times(0.25).shiftedBy(-W).toFixed(W),
              50: X.times(0.5).shiftedBy(-W).toFixed(W),
              75: X.times(0.75).shiftedBy(-W).toFixed(W),
              100: X.shiftedBy(-W).toFixed(W)
            }),
            (i = 'Deposit '.concat(t.depositToken.symbol)),
            (c = 'Balance: '.concat(B)),
            (d = 'Add Tokens'),
            (g = 'Depositing '.concat(t.depositToken.symbol, '...')),
            (l = G),
            (j = X))
          : ((b = {
              25: Y.times(0.25).shiftedBy(-W).toFixed(W),
              50: Y.times(0.5).shiftedBy(-W).toFixed(W),
              75: Y.times(0.75).shiftedBy(-W).toFixed(W),
              100: Y.shiftedBy(-W).toFixed(W)
            }),
            (i = 'Withdraw '.concat(t.depositToken.symbol)),
            (c = 'Deposit: '.concat(E)),
            (d = 'Remove Tokens'),
            (g = 'Withdrawing '.concat(t.depositToken.symbol, '...')),
            (l = H),
            (j = Y))
        var Z = new (C())(L).shiftedBy(W)
        return (0, e.jsx)(o.Z, {
          open: z,
          onClose: function () {
            return T()
          },
          children: (0, e.jsxs)(p.Z, {
            children: [
              (0, e.jsx)(r.Z, { children: i }),
              (0, e.jsxs)(q.Z, {
                children: [
                  (0, e.jsx)('div', { className: u().floatRight, children: c }),
                  (0, e.jsx)(s.Z, {
                    label: 'Amount',
                    value: L,
                    precision: t.depositToken.decimals,
                    onChange: function (a) {
                      return M(a)
                    },
                    children: [25, 50, 75, 100].map(function (a, c) {
                      return (0, e.jsx)(
                        'button',
                        {
                          className: ''
                            .concat(w().buttonGroupButton, ' ')
                            .concat(
                              Z.gt(0) && L === b[a]
                                ? w().buttonGroupButtonActive
                                : ''
                            ),
                          onClick: function () {
                            return M(b[a])
                          },
                          children: 100 === a ? 'MAX' : ''.concat(a, '%')
                        },
                        'frmbtn'.concat(c)
                      )
                    })
                  }),
                  (0, e.jsxs)('div', {
                    className: u().buttons,
                    children: [
                      (0, e.jsx)(k.Z, {
                        className: ''
                          .concat(u().button, ' ')
                          .concat(u().cancel),
                        onClick: T,
                        children: 'Cancel'
                      }),
                      (0, e.jsxs)(k.Z, {
                        className: ''
                          .concat(u().button, ' ')
                          .concat(u().primary),
                        disabled: Z.gt(j) || Z.lte(0) || !J || O || '' === L,
                        onClick: (0, f.Z)(
                          h().mark(function a () {
                            var b
                            return h().wrap(function (a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    return (
                                      (b = D.Am.loading(g)),
                                      P(!0),
                                      (a.next = 4),
                                      l(
                                        L,
                                        function () {
                                          return U(b)
                                        },
                                        function (a) {
                                          return V(a, b)
                                        }
                                      )
                                    )
                                  case 4:
                                  case 'end':
                                    return a.stop()
                                }
                            }, a)
                          })
                        ),
                        children: [
                          !O && !J && 'Connect your wallet',
                          !O && J && Z.gt(0) && R && 'Approve Token',
                          !O && J && Z.gt(j) && !R && 'Insufficient Balance',
                          !O && J && Z.lte(j) && Z.gt(0) && '' !== L && !R && d,
                          !O && J && (Z.eq(0) || '' === L) && 'Enter amount',
                          O && 'Please wait ...'
                        ]
                      })
                    ]
                  }),
                  t.type === y.Gw.LP &&
                    (0, e.jsx)(A(), {
                      href: '/liquidity/pool?main='
                        .concat(t.lpPair[0].address, '&base=')
                        .concat(t.lpPair[1].address),
                      children: (0, e.jsxs)('a', {
                        className: u().link,
                        children: [
                          'Get ',
                          t.depositToken.name,
                          (0, e.jsx)(m.xXr, { className: u().icon })
                        ]
                      })
                    })
                ]
              })
            ]
          })
        })
      }
      var F,
        G,
        H = c(4924),
        I = c(828),
        J = c(388),
        K = c(6473),
        L = c(607),
        M = c(4146),
        N = c(2593),
        O = c(4671),
        P = {},
        Q = (0, O.Z)(function (a) {
          return {
            farmsTvl: P,
            setFarmsTvl: function (b) {
              return a({ farmsTvl: b })
            }
          }
        }),
        R = c(9316),
        S = {
          farm: null,
          balanceDeposited: null,
          balanceDepositedUsd: null,
          balanceRewards: null,
          balanceRewardsUsd: null,
          balanceUnstaked: null,
          apr: null,
          tvl: null,
          add:
            ((F = (0, f.Z)(
              h().mark(function a (b) {
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                      case 'end':
                        return a.stop()
                    }
                }, a)
              })
            )),
            function (a) {
              return F.apply(this, arguments)
            }),
          remove:
            ((G = (0, f.Z)(
              h().mark(function a (b) {
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                      case 'end':
                        return a.stop()
                    }
                }, a)
              })
            )),
            function (a) {
              return G.apply(this, arguments)
            }),
          harvest: (0, f.Z)(
            h().mark(function a () {
              return h().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                    case 'end':
                      return a.stop()
                  }
              }, a)
            })
          ),
          checkAllowance: (0, f.Z)(
            h().mark(function a () {
              return h().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                    case 'end':
                      return a.stop()
                  }
              }, a)
            })
          )
        },
        T = c(4305),
        U = c(8735)
      function V (a) {
        var b,
          c,
          d,
          g,
          i,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          z,
          A,
          B,
          F,
          G,
          O,
          P,
          V,
          W,
          X,
          Y,
          Z,
          $,
          _,
          aa,
          ab,
          ac,
          ad = a.id,
          ae = a.walletActive,
          af = a.visible,
          ag = a.showOnlyWhenDeposit,
          ah = a.showDeprecated,
          ai = (0, n.useState)(!1),
          aj = ai[0],
          ak = ai[1],
          al = (0, n.useState)(!1),
          am = al[0],
          an = al[1],
          ao = (0, n.useState)('add'),
          ap = ao[0],
          aq = ao[1],
          ar = (0, T.Z)(),
          as =
            ((p = ad),
            (q = Q()),
            (r = (0, L.Z)().tokenPrices),
            (s = (0, R.Z)()),
            (u = (t = (0, x.Ge)()).account),
            (v = t.library),
            (w = (0, x.Ge)(J.p5.mainNet.id.toString())),
            (z = w.library),
            (A = w.active),
            (B = w.activate),
            (F = (0, n.useState)(Object.assign({}, S, { farm: y.Yb[p] }))),
            (G = F[0]),
            (O = F[1]),
            (P = (0, n.useRef)({ values: G, account: u, library: v })),
            (0, n.useEffect)(function () {
              O(
                Object.assign({}, G, {
                  farm: y.Yb[p],
                  add: Y,
                  remove: $,
                  harvest: aa,
                  checkAllowance: ac
                })
              )
            }, []),
            (0, n.useEffect)(
              function () {
                P.current = { values: G, account: u, library: v }
              },
              [G, u, v]
            ),
            (0, n.useEffect)(
              function () {
                A ||
                  setTimeout(function () {
                    return B(J.pZ.network)
                  }, 1)
              },
              [A]
            ),
            (0, n.useEffect)(
              function () {
                W()
                var a = setInterval(function () {
                  W()
                }, J.C6)
                return function () {
                  return clearInterval(a)
                }
              },
              [u, r, z, v, s]
            ),
            (W =
              ((V = (0, f.Z)(
                h().mark(function a () {
                  var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    t,
                    v,
                    w,
                    x,
                    A,
                    B,
                    C,
                    D,
                    E,
                    F,
                    J,
                    L
                  return h().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (((b = G.farm), !(z && r && s && b))) {
                            a.next = 53
                            break
                          }
                          return (
                            (c = new M.Contract(b.address, b.abi, z)),
                            (d = new M.Contract(
                              b.depositToken.address,
                              b.depositToken.abi,
                              z
                            )),
                            (a.t0 = I.Z),
                            (a.next = 7),
                            Promise.all([
                              d.balanceOf(b.address),
                              c.totalAllocPoint(),
                              c.kibPerSecond(),
                              c.poolInfo(b.pid)
                            ])
                          )
                        case 7:
                          if (
                            ((a.t1 = a.sent),
                            (f = (e = (0, a.t0)(a.t1, 4))[0]),
                            (g = e[1]),
                            (i = e[2]),
                            (j = e[3]),
                            (k = 0),
                            (l = 0),
                            !(b.type === y.Gw.LP && b.lpPair))
                          ) {
                            a.next = 27
                            break
                          }
                          return (
                            (a.t2 = I.Z),
                            (a.next = 19),
                            Promise.all([d.getReserves(), d.totalSupply()])
                          )
                        case 19:
                          ;(a.t3 = a.sent),
                            (n = (m = (0, a.t2)(a.t3, 2))[0]),
                            (o = m[1]),
                            (k =
                              (2 *
                                (0, K.fp)(
                                  'chewy-wdoge' === b.id ? n[0] : n[1],
                                  b.lpPair[1].decimals
                                ) *
                                r[b.lpPair[1].priceApiId].usd) /
                              (0, K.fp)(o, b.depositToken.decimals)),
                            (l = (0, K.fp)(f, b.depositToken.decimals) * k),
                            (a.next = 28)
                          break
                        case 27:
                          b.type === y.Gw.SAS &&
                            ((k = s),
                            (l =
                              ((0, K.fp)(f, b.depositToken.decimals) / 1e9) *
                              k))
                        case 28:
                          if (
                            ((p = 31536e3),
                            (t = (0, K.fp)(i, b.rewardTokens[0].decimals) * p),
                            (v = (0, K.fp)(j.allocPoint, 0) / (0, K.fp)(g, 0)),
                            (w = v * ((t * s) / l) * 100),
                            (x = null),
                            (A = null),
                            (B = null),
                            (C = null),
                            (D = null),
                            !u)
                          ) {
                            a.next = 51
                            break
                          }
                          return (
                            (a.t4 = I.Z),
                            (a.next = 41),
                            Promise.all([
                              c.userInfo(b.pid, u),
                              c.pendingKIB(b.pid, u),
                              d.balanceOf(u)
                            ])
                          )
                        case 41:
                          ;(a.t5 = a.sent),
                            (F = (E = (0, a.t4)(a.t5, 3))[0]),
                            (J = E[1]),
                            (L = E[2]),
                            (x = (0, K.FM)(J, b.rewardTokens[0].decimals)),
                            (B = (0, K.FM)(F.amount, b.depositToken.decimals)),
                            (C = (0, K.FM)(L, b.depositToken.decimals)),
                            b.type === y.Gw.LP && b.lpPair
                              ? (D = (
                                  (0, K.nO)(F.amount, b.depositToken.decimals) *
                                  k
                                ).toString())
                              : b.type === y.Gw.SAS &&
                                (D = (
                                  ((0, K.nO)(
                                    F.amount,
                                    b.depositToken.decimals
                                  ) /
                                    1e9) *
                                  k
                                ).toString()),
                            (A = (
                              (0, K.nO)(J, b.rewardTokens[0].decimals) * s
                            ).toString())
                        case 51:
                          q.setFarmsTvl(
                            Object.assign({}, q.farmsTvl, (0, H.Z)({}, b.id, l))
                          ),
                            O(
                              Object.assign({}, G, {
                                farm: b,
                                apr: w.toString(),
                                tvl: l.toString(),
                                balanceDeposited: B,
                                balanceRewards: x,
                                balanceRewardsUsd: A,
                                balanceUnstaked: C,
                                balanceDepositedUsd: D
                              })
                            )
                        case 53:
                        case 'end':
                          return a.stop()
                      }
                  }, a)
                })
              )),
              function () {
                return V.apply(this, arguments)
              })),
            (Y =
              ((X = (0, f.Z)(
                h().mark(function a (b, c, d) {
                  var e, f, g, i, j, k, l, m, n, o, p, q, r
                  return h().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((f = (e = P.current).account),
                              (g = e.library),
                              (i = e.values),
                              !(f && g && i.farm))
                            ) {
                              a.next = 33
                              break
                            }
                            return (
                              (a.prev = 2),
                              (j = new (C())(b).shiftedBy(
                                i.farm.depositToken.decimals
                              )),
                              (k = (0, K.FE)(j, i.farm.depositToken.decimals)),
                              (l = new M.Contract(
                                i.farm.address,
                                i.farm.abi,
                                g.getSigner()
                              )),
                              (m = new M.Contract(
                                i.farm.depositToken.address,
                                i.farm.depositToken.abi,
                                g.getSigner()
                              )),
                              (a.next = 9),
                              m.allowance(f, i.farm.address)
                            )
                          case 9:
                            if (!(n = a.sent).lt(k)) {
                              a.next = 19
                              break
                            }
                            return (
                              (a.next = 13),
                              m.estimateGas.approve(
                                i.farm.address,
                                N.O$.from(J.zL)
                              )
                            )
                          case 13:
                            return (
                              (o = a.sent),
                              (a.next = 16),
                              m.approve(i.farm.address, N.O$.from(J.zL), {
                                gasLimit: (0, K.yC)(o),
                                gasPrice: J.Q0
                              })
                            )
                          case 16:
                            return (p = a.sent), (a.next = 19), p.wait()
                          case 19:
                            return (
                              (a.next = 21),
                              l.estimateGas.deposit(i.farm.pid, k)
                            )
                          case 21:
                            return (
                              (q = a.sent),
                              (a.next = 24),
                              l.deposit(i.farm.pid, k, {
                                gasLimit: (0, K.yC)(q),
                                gasPrice: J.Q0
                              })
                            )
                          case 24:
                            return (r = a.sent), (a.next = 27), r.wait()
                          case 27:
                            c(), (a.next = 33)
                            break
                          case 30:
                            ;(a.prev = 30),
                              (a.t0 = a.catch(2)),
                              d(a.t0.data ? a.t0.data.message : a.t0.message)
                          case 33:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[2, 30]]
                  )
                })
              )),
              function (a, b, c) {
                return X.apply(this, arguments)
              })),
            ($ =
              ((Z = (0, f.Z)(
                h().mark(function a (b, c, d) {
                  var e, f, g, i, j, k, l, m, n
                  return h().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((f = (e = P.current).account),
                              (g = e.library),
                              (i = e.values),
                              !(f && g && i.farm))
                            ) {
                              a.next = 20
                              break
                            }
                            return (
                              (a.prev = 2),
                              (j = new (C())(b).shiftedBy(
                                i.farm.depositToken.decimals
                              )),
                              (k = (0, K.FE)(j, i.farm.depositToken.decimals)),
                              (l = new M.Contract(
                                i.farm.address,
                                i.farm.abi,
                                g.getSigner()
                              )),
                              (a.next = 8),
                              l.estimateGas.withdraw(i.farm.pid, k)
                            )
                          case 8:
                            return (
                              (m = a.sent),
                              (a.next = 11),
                              l.withdraw(i.farm.pid, k, {
                                gasLimit: (0, K.yC)(m),
                                gasPrice: J.Q0
                              })
                            )
                          case 11:
                            return (n = a.sent), (a.next = 14), n.wait()
                          case 14:
                            c(), (a.next = 20)
                            break
                          case 17:
                            ;(a.prev = 17),
                              (a.t0 = a.catch(2)),
                              d(a.t0.data ? a.t0.data.message : a.t0.message)
                          case 20:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[2, 17]]
                  )
                })
              )),
              function (a, b, c) {
                return Z.apply(this, arguments)
              })),
            (aa =
              ((_ = (0, f.Z)(
                h().mark(function a (b, c) {
                  var d, e, f, g, i, j, k
                  return h().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((e = (d = P.current).account),
                              (f = d.library),
                              (g = d.values),
                              !(e && f && g.farm))
                            ) {
                              a.next = 18
                              break
                            }
                            return (
                              (a.prev = 2),
                              (i = new M.Contract(
                                g.farm.address,
                                g.farm.abi,
                                f.getSigner()
                              )),
                              (a.next = 6),
                              i.estimateGas.withdraw(g.farm.pid, 0)
                            )
                          case 6:
                            return (
                              (j = a.sent),
                              (a.next = 9),
                              i.withdraw(g.farm.pid, 0, {
                                gasLimit: (0, K.yC)(j),
                                gasPrice: J.Q0
                              })
                            )
                          case 9:
                            return (k = a.sent), (a.next = 12), k.wait()
                          case 12:
                            b(), (a.next = 18)
                            break
                          case 15:
                            ;(a.prev = 15),
                              (a.t0 = a.catch(2)),
                              c(a.t0.data ? a.t0.data.message : a.t0.message)
                          case 18:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[2, 15]]
                  )
                })
              )),
              function (a, b) {
                return _.apply(this, arguments)
              })),
            (ac =
              ((ab = (0, f.Z)(
                h().mark(function a (b) {
                  var c, d, e, f, g, i, j, k
                  return h().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            ((d = (c = P.current).account),
                            (e = c.library),
                            (f = c.values),
                            !(d && e && f.farm))
                          ) {
                            a.next = 11
                            break
                          }
                          return (
                            (g = new (C())(b).shiftedBy(
                              f.farm.depositToken.decimals
                            )),
                            (i = (0, K.FE)(g, f.farm.depositToken.decimals)),
                            (j = new M.Contract(
                              f.farm.depositToken.address,
                              f.farm.depositToken.abi,
                              e.getSigner()
                            )),
                            (a.next = 7),
                            j.allowance(d, f.farm.address)
                          )
                        case 7:
                          return (k = a.sent), a.abrupt('return', k.lt(i))
                        case 11:
                          return a.abrupt('return', !1)
                        case 12:
                        case 'end':
                          return a.stop()
                      }
                  }, a)
                })
              )),
              function (a) {
                return ab.apply(this, arguments)
              })),
            G),
          at = as.farm,
          au = as.balanceDeposited,
          av = as.balanceDepositedUsd,
          aw = as.balanceRewards,
          ax = as.balanceRewardsUsd,
          ay = as.balanceUnstaked,
          az = as.apr,
          aA = as.tvl,
          aB = as.add,
          aC = as.remove,
          aD = as.harvest,
          aE = as.checkAllowance
        if (!at) return null
        var aF = function () {
          return ae
            ? (0, e.jsx)(k.Z, {
                disabled: aj || !au || 0 === Number(au),
                onClick: (0, f.Z)(
                  h().mark(function a () {
                    var b
                    return h().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (b = D.Am.loading(
                                'Harvesting '.concat(
                                  at.rewardTokens
                                    .map(function (a) {
                                      return a.symbol
                                    })
                                    .join('+'),
                                  ' rewards...'
                                )
                              )),
                              ak(!0),
                              (a.next = 4),
                              aD(
                                function () {
                                  D.Am.update(b, {
                                    render: 'Success',
                                    type: 'success',
                                    isLoading: !1,
                                    autoClose: 5e3
                                  }),
                                    ak(!1)
                                },
                                function (a) {
                                  D.Am.update(b, {
                                    render: ''.concat(a),
                                    type: 'error',
                                    isLoading: !1,
                                    autoClose: 5e3
                                  }),
                                    ak(!1)
                                }
                              )
                            )
                          case 4:
                          case 'end':
                            return a.stop()
                        }
                    }, a)
                  })
                ),
                className: j().harvestButton,
                children: 'Harvest'
              })
            : (0, e.jsx)(k.Z, {
                className: j().harvestButton,
                onClick: function () {
                  return ar.setWalletOpen(!0)
                },
                children: 'Connect'
              })
        }
        return (0, e.jsxs)(l.Z, {
          className: ''
            .concat(j().farmCard, ' ')
            .concat(af ? j().visible : '', ' ')
            .concat(ae && ag && 0 >= Number(au) ? j().hidden : '', ' ')
            .concat(
              !ah &&
                Boolean(
                  null === (b = at.flags) || void 0 === b
                    ? void 0
                    : b.deprecated
                )
                ? j().hidden
                : '',
              ' '
            )
            .concat(at.flags && at.flags.deprecated ? j().deprecated : ''),
          children: [
            at.type === y.Gw.LP &&
              (0, e.jsxs)('div', {
                className: j().tokenLogos,
                children: [
                  (0, e.jsx)('img', { src: at.lpPair[0].logoURI }),
                  (0, e.jsx)('img', { src: at.lpPair[1].logoURI })
                ]
              }),
            at.type === y.Gw.SAS &&
              (0, e.jsx)('div', {
                className: j().tokenLogos,
                children: (0, e.jsx)('img', { src: at.depositToken.logoURI })
              }),
            at.flags &&
              at.flags.deprecated &&
              (0, e.jsxs)('span', {
                className: j().deprecatedBadge,
                children: [
                  'Deprecated',
                  ' ',
                  (0, e.jsx)(m.ib5, {
                    className: j().informationCircleIcon,
                    'data-tip':
                      'This farm is deprecated and not paying any more rewards. Please withdraw your LP tokens and migrate.'
                  })
                ]
              }),
            !(null === (c = at.flags) || void 0 === c
              ? void 0
              : c.deprecated) &&
              (0, e.jsxs)('span', {
                className: j().earnBadge,
                children: ['Earn KIB + Fees']
              }),
            (0, e.jsxs)('h4', {
              className: j().tokenName,
              children: [
                at.name,
                (0, e.jsx)('span', {
                  className: j().tokenType,
                  children: at.type
                })
              ]
            }),
            (0, e.jsx)('h6', { className: j().title, children: 'Current APR' }),
            (0, e.jsxs)('h5', {
              className: j().value,
              children: [
                at.flags && at.flags.deprecated && '-',
                !(null === (d = at.flags) || void 0 === d
                  ? void 0
                  : d.deprecated) &&
                  !az &&
                  'loading ...',
                !(null === (g = at.flags) || void 0 === g
                  ? void 0
                  : g.deprecated) &&
                  az &&
                  'Infinity' === az &&
                  '-',
                !(null === (i = at.flags) || void 0 === i
                  ? void 0
                  : i.deprecated) &&
                  az &&
                  'Infinity' !== az &&
                  ''.concat(
                    Number(az).toFixed().slice(0, -14),
                    ' %'
                  )
              ]
            }),
            (0, e.jsx)('h6', { className: j().title, children: 'TVL' }),
            (0, e.jsxs)('h5', {
              className: j().value,
              children: [
                !aA && 'loading ...',
                aA && 'Infinity' === aA && '-',
                aA &&
                  'Infinity' !== aA &&
                  Number(aA).toLocaleString(J.al, {
                    style: 'currency',
                    currency: 'USD'
                  })
              ]
            }),
            (0, e.jsxs)('div', {
              className: j().twoCols,
              children: [
                (0, e.jsxs)('div', {
                  children: [
                    (0, e.jsx)('h6', {
                      className: j().title,
                      children: 'Your deposit'
                    }),
                    (0, e.jsxs)('h5', {
                      className: j().value,
                      children: [
                        au ? (0, K.$G)(au) : '-',
                        (0, e.jsx)('span', {
                          className: j().note,
                          children: av
                            ? Number(av).toLocaleString(J.al, {
                                style: 'currency',
                                currency: 'USD'
                              })
                            : '-'
                        })
                      ]
                    })
                  ]
                }),
                ae &&
                  (0, e.jsxs)('div', {
                    children: [
                      (0, e.jsx)(k.Z, {
                        onClick: function () {
                          aq('remove'), an(!0)
                        },
                        className: j().addRemoveButton,
                        children: (0, e.jsx)(m._kz, {
                          className: j().addRemoveIcon
                        })
                      }),
                      !(null === (o = at.flags) || void 0 === o
                        ? void 0
                        : o.deprecated) &&
                        (0, e.jsx)(k.Z, {
                          onClick: function () {
                            aq('add'), an(!0)
                          },
                          className: j().addRemoveButton,
                          children: (0, e.jsx)(m.xcL, {
                            className: j().addRemoveIcon
                          })
                        })
                    ]
                  })
              ]
            }),
            (0, e.jsxs)('div', {
              className: j().twoCols,
              children: [
                (0, e.jsxs)('div', {
                  children: [
                    (0, e.jsxs)('h6', {
                      className: j().title,
                      children: [
                        at.rewardTokens
                          .map(function (a) {
                            return a.symbol
                          })
                          .join('+'),
                        ' Earned'
                      ]
                    }),
                    (0, e.jsxs)('h5', {
                      className: j().value,
                      children: [
                        !aw && '-',
                        aw &&
                          Number(aw).toLocaleString(J.al, {
                            maximumFractionDigits: 2
                          }),
                        (0, e.jsx)('span', {
                          className: j().note,
                          children:
                            ax &&
                            Number(ax).toLocaleString(J.al, {
                              style: 'currency',
                              currency: 'USD'
                            })
                        })
                      ]
                    })
                  ]
                }),
                aF()
              ]
            }),
            (0, e.jsx)('div', {
              className: ''
                .concat(j().status, ' ')
                .concat(au && 0 !== Number(au) ? j().earning : ''),
              children:
                au && 0 !== Number(au)
                  ? 'You are earning rewards'
                  : 'You have no deposit'
            }),
            (0, e.jsx)(E, {
              open: am,
              status: ap,
              setOpen: an,
              farm: at,
              balance: ay || '',
              deposit: au || '',
              add: aB,
              remove: aC,
              checkAllowance: aE
            }),
            (0, e.jsx)(U.Z, {
              effect: 'float',
              multiline: !0,
              place: 'right',
              offset: { right: 10 },
              className: 'tooltip'
            })
          ]
        })
      }
      var W,
        X = c(393),
        Y = c.n(X),
        Z = c(9738),
        $ = c(4622),
        _ = c(2319)
      ;((W = d || (d = {})).CoreFarms = 'coreFarms'),
        (W.CommunityFarms = 'communityFarms'),
        (W.SASFarms = 'sasFarms'),
        (W.DeprecatedFarms = 'deprecatedFarms')
      var aa = function () {
          var a = (0, T.Z)(),
            b = (0, x.Ge)().active,
            c = (0, n.useState)(d.CoreFarms),
            f = c[0],
            g = c[1],
            h = (0, n.useState)(!1),
            i = h[0],
            j = h[1],
            k = (0, n.useState)(!1),
            l = k[0],
            m = k[1]
          return (
            (0, n.useEffect)(function () {
              a.setActivePage('farms')
            }, []),
            (0, e.jsxs)(Z.Z, {
              children: [
                (0, e.jsx)($.Z, {
                  title: 'KibbleSwap Farms Backup Page',
                  subTitle:
                    'Access KibbleSwap Farms here if their site is down. Note that Current APR is not Accurate'
                }),
                (0, e.jsxs)('nav', {
                  className: Y().tabbedNav,
                  children: [
                    (0, e.jsx)('h4', {
                      className: ''
                        .concat(Y().title, ' ')
                        .concat(f === d.CoreFarms ? Y().active : ''),
                      onClick: function () {
                        return g(d.CoreFarms)
                      },
                      children: 'Core Farms'
                    }),
                    (0, e.jsx)('h4', {
                      className: ''
                        .concat(Y().title, ' ')
                        .concat(f === d.CommunityFarms ? Y().active : ''),
                      onClick: function () {
                        return g(d.CommunityFarms)
                      },
                      children: 'Community Farms'
                    }),
                    (0, e.jsx)('h4', {
                      className: ''
                        .concat(Y().title, ' ')
                        .concat(f === d.SASFarms ? Y().active : ''),
                      onClick: function () {
                        return g(d.SASFarms)
                      },
                      children: 'Single Asset Farms'
                    })
                  ]
                }),
                (0, e.jsxs)('div', {
                  className: Y().filters,
                  children: [
                    (0, e.jsx)(_.Z, {
                      label: 'Show deprecated farms',
                      tooltip: 'Shows deprecated farms.',
                      value: l,
                      onChange: function (a) {
                        return m(!l)
                      }
                    }),
                    (0, e.jsx)(_.Z, {
                      label: 'Only active deposits',
                      tooltip: 'Shows only farms where you have a deposit.',
                      value: i,
                      onChange: function (a) {
                        return j(!i)
                      }
                    })
                  ]
                }),
                (0, e.jsx)('div', {
                  className: Y().farmCards,
                  children: y.ZP.map(function (a) {
                    return (0,
                    e.jsx)(V, { id: a.id, walletActive: b, visible: (a.category === y.XG.CoreFarm && f === d.CoreFarms) || (a.category === y.XG.CommunityFarm && f === d.CommunityFarms) || (a.category === y.XG.SASFarm && f === d.SASFarms), showOnlyWhenDeposit: i, showDeprecated: l }, a.id)
                  })
                })
              ]
            })
          )
        },
        ab = aa
    },
    3020: function (a) {
      a.exports = {
        farmCard: 'farm-card_farmCard__tGJ__',
        visible: 'farm-card_visible__K23XC',
        hidden: 'farm-card_hidden__hv8sz',
        tokenLogos: 'farm-card_tokenLogos__Rdhrj',
        earnBadge: 'farm-card_earnBadge__gNFaE',
        deprecatedBadge: 'farm-card_deprecatedBadge__UIKHt',
        tokenName: 'farm-card_tokenName__WYacx',
        tokenType: 'farm-card_tokenType__SPnMU',
        title: 'farm-card_title__rj_J3',
        value: 'farm-card_value__uFgpl',
        note: 'farm-card_note__0hh0K',
        bgImage: 'farm-card_bgImage__d1O_v',
        twoCols: 'farm-card_twoCols__WiyuW',
        harvestButton: 'farm-card_harvestButton__MTh48',
        addRemoveButton: 'farm-card_addRemoveButton__QTCKC',
        addRemoveIcon: 'farm-card_addRemoveIcon__Kx3Yh',
        status: 'farm-card_status__skvF6',
        earning: 'farm-card_earning__qjahG',
        pulse: 'farm-card_pulse__oMi17',
        informationCircleIcon: 'farm-card_informationCircleIcon__VOy6U'
      }
    },
    4023: function (a) {
      a.exports = {
        floatRight: 'farm-modal_floatRight__5WakC',
        link: 'farm-modal_link__pEoKn',
        icon: 'farm-modal_icon__NJo4J',
        buttons: 'farm-modal_buttons__iIBz_',
        button: 'farm-modal_button__vPqnt',
        primary: 'farm-modal_primary__Q7hD0',
        cancel: 'farm-modal_cancel__X70QR'
      }
    },
    393: function (a) {
      a.exports = {
        tabbedNav: 'farms_tabbedNav__C43pv',
        title: 'farms_title__GZVWp',
        active: 'farms_active__KcGXT',
        filters: 'farms_filters__LdIjJ',
        farmCards: 'farms_farmCards__ebrBs'
      }
    }
  },
  function (a) {
    a.O(0, [595, 431, 232, 774, 888, 179], function () {
      var b
      return a((a.s = 165))
    }),
      (_N_E = a.O())
  }
])
