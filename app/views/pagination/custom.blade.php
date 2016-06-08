@if($paginator->getLastPage() > 1)
    <div class="pagination">
        {{ with(new Austen\Pagination\AustenPresenter($paginator))->render() }}
    </div>
@endif