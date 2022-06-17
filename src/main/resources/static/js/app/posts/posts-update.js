var postsUpdate = {
    init : function(){
        var _this = this;
        $('#btn-update').on('click', function(){
            _this.update();
        });
        $('#btn-delete').on('click', function(){
            _this.delete();
        });
    },
    update : function(){

        var data = {
            title : $('#title').val(),
            content : $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 수정되었습니다. ');
            window.location.href='/posts/list';
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    },

    delete : function(){

        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(id)
        }).done(function(){
            alert('글이 삭제되었습니다. ');
            window.location.href='/posts/list';
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }
}

postsUpdate.init();