var resolveRelative = require('./lib');

exports['should resolve relative URL'] = function(test) {
  test.expect(3);

  test.strictEqual(resolveRelative('/banner.img', 'http://www.somedomain.com'), 'http://www.somedomain.com/banner.img', 'should return resolved URL');
  test.strictEqual(resolveRelative('/img/banner.img', 'http://www.somedomain.com'), 'http://www.somedomain.com/img/banner.img', 'should return resolved URL');
  test.strictEqual(resolveRelative('/', 'http://www.somedomain.com'), 'http://www.somedomain.com/', 'should return resolved URL');

  test.done();
}

exports['should return non-relative URL unchanged'] = function(test) {
  test.expect(3);

  test.strictEqual(resolveRelative('http://www.otherdomain.com/banner.img', 'http://www.somedomain.com'), 'http://www.otherdomain.com/banner.img', 'should return non-relative URL');
  test.strictEqual(resolveRelative('http://www.otherdomain.com/img/banner.img', 'http://www.somedomain.com'), 'http://www.otherdomain.com/img/banner.img', 'should return non-relative URL');
  test.strictEqual(resolveRelative('http://www.otherdomain.com', 'http://www.somedomain.com'), 'http://www.otherdomain.com', 'should return non-relative URL');

  test.done();
}

exports['should return source for undefined link'] = function(test) {
  test.expect(3);

  test.strictEqual(resolveRelative('', 'http://www.somedomain.com'), 'http://www.somedomain.com', 'should return source');
  test.strictEqual(resolveRelative(undefined, 'http://www.somedomain.com'), 'http://www.somedomain.com', 'should return source');
  test.strictEqual(resolveRelative(null, 'http://www.somedomain.com'), 'http://www.somedomain.com', 'should return source');

  test.done();
}

exports['should return undefined for undefined source and relative'] = function(test) {
  test.expect(2);

  test.strictEqual(resolveRelative('/banner.img', undefined), undefined, 'should return undefined');
  test.strictEqual(resolveRelative(undefined, undefined), undefined, 'should return undefined');

  test.done();
}
