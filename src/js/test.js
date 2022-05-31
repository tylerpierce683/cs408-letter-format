QUnit.test('Test header\'s <h1> tag', function(assert) {
    const h1 = document.querySelectorAll('body > h1');
    assert.ok(h1.length === 1, '<h1> tag exists in <header>');

    const text = h1[0].innerText;
    assert.ok(text.length > 0, '<h1> contains text');
});

QUnit.test('First image is a funny picture', function(assert) {
    const imgTags = document.getElementsByTagName('img');

    assert.ok(imgTags.length >= 1, 'At least 1 <img> tag exists');
    assert.equal(imgTags[0].getAttribute('src'), 'img/compile.jpeg', 'src attribute of first <img> tag');
    assert.equal(imgTags[0].getAttribute('alt'), 'Funny image', 'alt attribute of first <img> tag');
});
